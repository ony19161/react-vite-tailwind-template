import { IdValueResponse } from "../../models/response/idValueResponse";


export const mapToSelectDropdownValues = (list: IdValueResponse[]) => {
    var mappedList = list.map((item: IdValueResponse) => {
        return {
            value: item.id.toString(),
            label: item.value
        }
    });

    return mappedList;
}