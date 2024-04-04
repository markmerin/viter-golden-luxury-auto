import { useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  setError,
  setIsSettingsOpen,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { InputCheckbox } from "../../../helpers/FormInputs";
import { apiVersion, isDemoMode } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import BreadCrumbs from "../../../partials/BreadCrumbs";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import Navigation from "../Navigation";

const Maintenance = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [loadingMaintenance, setLoadingMaintenance] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: maintenance,
  } = useQueryData(
    `${apiVersion}/maintenance`, // endpoint
    "get", // method
    "maintenance" // key
  );

  console.log(maintenance);

  const initVal = {
    maintenance_is_for_client:
      maintenance?.count > 0
        ? maintenance?.data[0].maintenance_is_for_client === 1
          ? true
          : false
        : false,
    maintenance_is_for_admin:
      maintenance?.count > 0
        ? maintenance?.data[0].maintenance_is_for_admin === 1
          ? true
          : false
        : false,
  };

  const yupSchema = Yup.object({});

  const handleCheckClient = async (e) => {
    setLoadingMaintenance(true);
    const data = await queryData(
      maintenance?.count > 0
        ? `${apiVersion}/maintenance/${maintenance?.data[0].maintenance_aid}`
        : `${apiVersion}/maintenance`,
      maintenance?.count > 0 ? "put" : "post",
      {
        maintenance_is_for_client: e.target.value === false ? 0 : 1,
        maintenance_is_for_admin: 0,
      }
    );

    if (!data.success) {
      dispatch(setError(true));
      dispatch(setMessage(data.error));
      setLoadingMaintenance(false);
    } else {
      dispatch(setSuccess(true));
      dispatch(setMessage("Successfully updated."));
      queryClient.invalidateQueries({ queryKey: ["maintenance"] });
      setLoadingMaintenance(false);
    }
  };

  const handleCheckAll = async (e) => {
    setLoadingMaintenance(true);
    const data = await queryData(
      maintenance?.count > 0
        ? `${apiVersion}/maintenance/${maintenance?.data[0].maintenance_aid}`
        : `${apiVersion}/maintenance`,
      maintenance?.count > 0 ? "put" : "post",
      {
        maintenance_is_for_client: e.target.value === false ? 0 : 1,
        maintenance_is_for_admin: e.target.value === false ? 0 : 1,
      }
    );

    if (!data.success) {
      dispatch(setError(true));
      dispatch(setMessage(data.error));
      setLoadingMaintenance(false);
    } else {
      dispatch(setSuccess(true));
      dispatch(setMessage("Successfully updated."));
      queryClient.invalidateQueries({ queryKey: ["maintenance"] });
      setLoadingMaintenance(false);
    }
  };

  return (
    <>
      <Header />
      <Navigation menu="" submenu="" />
      <div
        className={`wrapper  
           ${isDemoMode === 1 && "min-h-[calc(100vh-36px)]"} 
           transition-all ease-in duration-200 w-full ml-0 sm:ml-[256px] `}
      >
        <div className="flex items-start justify-between mt-1 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <h4 className="my-3 text-base capitalize">
              {location.pathname.split("/").pop().replaceAll("-", " ")}
            </h4>
          </div>
        </div>

        <div className="relative w-[650px] pt-5 pb-4 ">
          {loadingMaintenance || isFetching || isLoading ? (
            <FetchingSpinner />
          ) : (
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {}}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="relative mt-5 mb-6">
                      <InputCheckbox
                        label="Mark check to set maintenace for client"
                        name="maintenance_is_for_client"
                        id="maintenance_is_for_client"
                        onClick={(e) => handleCheckClient(e)}
                      />
                    </div>

                    {store.credentials.data.role_is_developer === 1 && (
                      <div className="relative mt-5 mb-6">
                        <InputCheckbox
                          label="Mark check to set maintenace for all user"
                          name="maintenance_is_for_admin"
                          id="maintenance_is_for_admin"
                          onClick={(e) => handleCheckAll(e)}
                        />
                      </div>
                    )}
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
        <Footer />
      </div>

      {store.success && <ModalSuccess />}
      {store.success && <FetchingSpinner />}
      {store.error && <ModalError />}
    </>
  );
};

export default Maintenance;
