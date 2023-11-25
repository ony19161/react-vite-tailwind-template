import { observer } from "mobx-react-lite";
import PageLayout from "../../layouts/PageLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../../../stores/store";

const Home = () => {
  
  const { commonStore } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!commonStore.token) {
      navigate('/login');
    }
      }, [navigate]);  

  return (
    <>
    <PageLayout isOpen={true} contentLabel={"Home"} mainContentLabelLink={"#"} subContentLabelLink={"#"}>
      
    </PageLayout>
    </>
  );
};

export default observer(Home);