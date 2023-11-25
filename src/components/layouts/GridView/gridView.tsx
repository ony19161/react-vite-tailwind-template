import { observer } from "mobx-react-lite";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
  //VisibilityState,
} from '@tanstack/react-table';
import { useEffect, useMemo, useRef, useState } from "react";
import './user.css';
import './table.css';
import { useStore } from "../../../stores/store";

interface Props {
  columns: any,
  details: any,
  getData: (pageNo: number, pageSize: number, hiddenColumns: any) => any,
  hiddenColumns: any
}

function GridView({ columns, details, getData, hiddenColumns }: Props) {

  const { commonStore } = useStore();
  //const [currentPage, setCurrentPage] = useState(details.currentPage);
  let currentPage = details.currentPage;
  const [isLoading, setIsLoading] = useState(false);
  //const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

 
  //const [gridData, setGridData] = useState(data);
  
  const goToFirstPage = () => {
    setIsLoading(true);
    getData(1, commonStore.pageSize, hiddenColumns);
    setIsLoading(false);
  };

  const goToLastPage = () => {
    setIsLoading(true);
    getData(details.pagingInfo.totalPages, commonStore.pageSize, hiddenColumns);
    setIsLoading(false);
  };

  const onNextPage = () => {
    setIsLoading(true);
    getData(details.pagingInfo.currentPage + 1, commonStore.pageSize, hiddenColumns);
    setIsLoading(false);
  };

  const onPrevPage = () => {
    setIsLoading(true);    
    getData(details.pagingInfo.currentPage - 1, commonStore.pageSize, hiddenColumns);
    setIsLoading(false);
  };

  const goToPage = (event: any) => {
    event.preventDefault();
    var pageNo = event.target.attributes.getNamedItem('data-tag').value;
    
    setIsLoading(true);    
    getData(pageNo, commonStore.pageSize, hiddenColumns);
    setIsLoading(false);
  }

  // const onSetPageSize = (pageSize: number) => {
  // const onSetPageSize = () => {
  //   setIsLoading(true);
  //   // getData(currentPage, pageSize);
  //   setIsLoading(false);
  // }


  // const { commonStore } = useStore();
  const [{ pageIndex, pageSize }, setPagination] =
    useState<PaginationState>({
      pageIndex: details.pagingInfo.currentPage,
      pageSize: commonStore.pageSize,
    });
  
    const pagination = useMemo(
      () => ({
        pageIndex,
        pageSize,
      }),
      [pageIndex, pageSize]
    )

  const table = useReactTable({
    data: details.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    pageCount: details.totalCount,
    state: {
      pagination,
      columnVisibility: hiddenColumns
    },
    onPaginationChange: setPagination
    //debugTable: true,
  });

  useEffect(() => {
    // console.log('Current page changed, pageNo: ' + currentPage);
    if (isLoading) {
      //setColumnVisibility({"sl": false});
       console.log('Loading data for, pageNo: ' + currentPage);
    }
    
  }, [currentPage]);

  var pagesArray = [];
    for (var i = 1; i <= details.pagingInfo.totalPages; i++) {
        
        if (i == details.pagingInfo.currentPage) {
            pagesArray.push(<li aria-current="page" key={i}>
            <a data-tag={i} onClick={(e: any) => goToPage(e)}
                className="relative block rounded-full bg-primary-41697 px-3 py-1.5 text-sm font-medium text-primary-white transition-all duration-300"
                href="#!"
                >{i}
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
            </span>
            </a>
            </li>);
        } else {
            pagesArray.push(<li  key={i}>
                <a data-tag={i} onClick={(e: any) => goToPage(e)}
                    className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                >{i}</a>
            </li>);
        }
        
    }

  const tableContainerRef = useRef<HTMLDivElement>(null);

  // const { rows } = table.getRowModel();

  return (
    <>
      <div className="my-2 overflow-x-auto mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div ref={tableContainerRef} style={{"maxWidth": "100%"}}>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => {
                        return (
                          <th
                            scope="col"
                            className="group px-2 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                            key={header.id}>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          </th>
                        )
                      })

                      }
                    </tr>
                  ))

                  }
                </thead>
                <tbody>
                  {table.getRowModel().rows.map(row => {
                  
                  return (
                    <tr key={row.id} style={{"borderBottom": "0.5px solid #ccc"}}>
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td key={cell.id} className="px-2 py-2 text-xs align-top" style={{ width: cell.column.getSize() }}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
              <tfoot className="bg-gray-50">
              {table.getFooterGroups().map(HeaderGroup => (
                    <tr key={HeaderGroup.id}>
                      {HeaderGroup.headers.map(header => {
                        return (
                          <th
                            scope="col"
                            className="group px-2 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                            key={header.id}>
                              {flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                              )}
                          </th>
                        )
                      })

                      }
                    </tr>
                  ))

                  }
              </tfoot>
              </table>
              <div className="h-2" />
              <div className="flex justify-center mb-3">
                <button
                  className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={goToFirstPage}
                  disabled={details.pagingInfo.totalPages == 1}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                  </svg>

                </button>
                <button
                  className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={onPrevPage}
                  disabled={details.pagingInfo.previousPage < 0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>

                </button>
                <nav aria-label="Page navigation">
                  <ul className="list-style-none flex mr-3">
                    { pagesArray}
                  </ul>
                </nav>
                <button
                  className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={onNextPage}
                  disabled={details.pagingInfo.nextPage < 0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>

                </button>
                <button
                  className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={goToLastPage}
                  disabled={details.pagingInfo.totalPages == 1}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                  </svg>

                </button>
                
                {/*<span className="flex items-center gap-1">
                  | Go To Page:
                  <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      table.setPageIndex(page)
                    }}
                    className="border p-1 rounded w-16"
                  /> 
                </span> */}
                {
                  details.totalCount > 10 ?
                  (<>
                  <select
                  value={table.getState().pagination.pageSize}
                  style={{width: '7%'}}
                  // onChange={e => {
                  //   onSetPageSize(Number(e.target.value))
                  // }}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
                  </>):
                  (<>
                  
                  </>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default observer(GridView);