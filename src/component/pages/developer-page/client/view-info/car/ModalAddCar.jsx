import useQueryData from "@/component/custom-hooks/useQueryData";
import useUploadPhoto from "@/component/custom-hooks/useUploadPhoto";
import {
  InputFileUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/component/helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
  handleEscape,
} from "@/component/helpers/functions-general";
import { queryData } from "@/component/helpers/queryData";
import ModalWrapperSide from "@/component/partials/modals/ModalWrapperSide";
import ButtonSpinner from "@/component/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import {
  FaArrowDown,
  FaRegImage,
  FaTimesCircle,
  FaUpload,
} from "react-icons/fa";
import * as Yup from "yup";

const ModalAddCar = ({ clientId, itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();
  const [withPhoto, setWithPhoto] = React.useState(false);

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `${apiVersion}/upload/photo`,
    dispatch
  );

  const {
    isLoading,
    isFetching,
    error,
    data: carMake,
  } = useQueryData(
    `${apiVersion}/car-make`, // endpoint
    "get", // method
    "carMake" // key
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/client-car/${itemEdit.car_aid}`
          : `${apiVersion}/client-car`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["client-car"] });
      queryClient.invalidateQueries({ queryKey: ["car"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(itemEdit ? "Successfully updated." : "Successfully added.")
        );
      }
    },
  });

  const initVal = {
    car_photo: itemEdit ? itemEdit.car_photo : "",
    car_client_id: clientId,
    car_vehicle_make_id: itemEdit ? itemEdit.car_vehicle_make_id : "",
    car_year: itemEdit ? itemEdit.car_year : "",
    car_specs: itemEdit ? itemEdit.car_specs : "",
    car_vin_number: itemEdit ? itemEdit.car_vin_number : "",
    car_plate_number: itemEdit ? itemEdit.car_plate_number : "",
    car_registration_date: itemEdit ? itemEdit.car_registration_date : "",
    car_gas: itemEdit ? itemEdit.car_gas : "",
    car_tire_size: itemEdit ? itemEdit.car_tire_size : "",
    car_oil_type: itemEdit ? itemEdit.car_oil_type : "",
    car_nada_retail: itemEdit ? itemEdit.car_nada_retail : "",
    car_nada_clean: itemEdit ? itemEdit.car_nada_clean : "",
    car_nada_average: itemEdit ? itemEdit.car_nada_average : "",
    car_nada_rough: itemEdit ? itemEdit.car_nada_rough : "",
    car_last_nada_retail: itemEdit ? itemEdit.car_last_nada_retail : "",
    car_last_nada_clean: itemEdit ? itemEdit.car_last_nada_clean : "",
    car_last_nada_average: itemEdit ? itemEdit.car_last_nada_average : "",
    car_last_nada_rough: itemEdit ? itemEdit.car_last_nada_rough : "",
    car_miles: itemEdit ? itemEdit.car_miles : "",
    car_last_oil_change: itemEdit ? itemEdit.car_last_oil_change : "",
    car_turo_link: itemEdit ? itemEdit.car_turo_link : "",
    car_admin_turo_link: itemEdit ? itemEdit.car_admin_turo_link : "",
    car_remarks: itemEdit ? itemEdit.car_remarks : "",
    car_management: itemEdit ? itemEdit.car_management : "",
  };

  const yupSchema = Yup.object({
    car_vehicle_make_id: Yup.string().required("Required"),
    car_year: Yup.string().required("Required"),
    car_specs: Yup.string().required("Required"),
    car_remarks: Yup.string().required("Required"),
    car_management: Yup.string().required("Required"),
  });

  const handleClose = () => {
    // set animation
    setAnimate("translate-x-full");
    // clear the modal
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  handleEscape(() => handleClose());

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapperSide
        handleClose={handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
      >
        <div className="relative mb-4 modal_header">
          <h3 className="text-sm text-black">
            {itemEdit ? "Update" : "Add"} Car
          </h3>
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-lg text-gray-400" />
          </button>
        </div>
        <div className="modal_body ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              uploadPhoto(clientId);
              mutation.mutate({
                ...values,
                car_photo:
                  (itemEdit && itemEdit.car_photo === "") || photo
                    ? photo === null
                      ? itemEdit.car_photo
                      : photo.name
                    : values.car_photo,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div
                      className={`relative mt-5 mb-6 border border-gray-300 rounded-md hover:border-primary hover:border-dashed ${
                        withPhoto && "border-primary border-dashed"
                      }`}
                      onDragOver={() => setWithPhoto(true)}
                      onDragLeave={() => setWithPhoto(false)}
                    >
                      {photo || (itemEdit && itemEdit.car_photo !== "") ? (
                        <img
                          src={
                            photo
                              ? URL.createObjectURL(photo) // preview
                              : itemEdit.car_photo // check db
                              ? devBaseImgUrl + "/" + itemEdit.car_photo
                              : null
                          }
                          alt="car photo"
                          className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                        />
                      ) : (
                        <span className="min-h-20 flex items-center justify-center">
                          <span className="text-accent mr-1">Drag & Drop</span>{" "}
                          photo here or{" "}
                          <span className="text-accent ml-1">Browse</span>
                        </span>
                      )}

                      {(photo !== null ||
                        (itemEdit && itemEdit.car_photo !== "")) && (
                        <span className="min-h-10 flex items-center justify-center">
                          <span className="text-accent mr-1">Drag & Drop</span>{" "}
                          photo here or{" "}
                          <span className="text-accent ml-1">Browse</span>
                        </span>
                      )}

                      {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                      <InputFileUpload
                        label="Car Photo"
                        name="photo"
                        type="file"
                        id="myFile"
                        accept="image/*"
                        title="Upload photo"
                        onChange={(e) => handleChangePhoto(e)}
                        onDrop={(e) => handleChangePhoto(e)}
                        className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputSelect
                        label="Status"
                        name="car_remarks"
                        disabled={mutation.isPending}
                      >
                        <option value="" hidden></option>
                        <option value="active">Active</option>
                        <option value="client-has-the-car">
                          Client Has the Car
                        </option>
                        <option value="client-may-remove-the-car">
                          Client May Remove the Car
                        </option>
                        <option value="inactive">Inactive</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="new">New</option>
                        <option value="recall">Recall</option>
                        <option value="returned">Returned</option>
                        <option value="savage-title">Salvage Title</option>
                        <option value="turo-unlisted">Turo Unlisted</option>
                      </InputSelect>
                    </div>

                    <div className="relative mb-6">
                      <InputSelect
                        label="Management"
                        name="car_management"
                        disabled={mutation.isPending}
                      >
                        <option value="" hidden></option>
                        <option value="own">Own</option>
                        <option value="manage">Manage</option>
                        <option value="ride-off">Ride Off</option>
                      </InputSelect>
                    </div>

                    <div className="relative mb-6">
                      <InputSelect
                        label="Vehicle Make"
                        name="car_vehicle_make_id"
                        disabled={mutation.isPending || isLoading || error}
                      >
                        {isLoading ? (
                          <option value="" disabled>
                            Loading...
                          </option>
                        ) : error ? (
                          <option value="" disabled>
                            API / Network Error
                          </option>
                        ) : carMake?.count > 0 ? (
                          <>
                            <option value="" hidden></option>
                            {carMake?.count > 0 ? (
                              carMake?.data.map((item, key) => {
                                return (
                                  <option value={item.car_make_aid} key={key}>
                                    {item.car_make_name}
                                  </option>
                                );
                              })
                            ) : (
                              <option value="" disabled>
                                No data
                              </option>
                            )}
                          </>
                        ) : (
                          <option value="" disabled>
                            No data
                          </option>
                        )}
                      </InputSelect>
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Vehicle Year"
                        type="number"
                        name="car_year"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Model / Specs"
                        type="text"
                        name="car_specs"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="VIN #"
                        type="text"
                        name="car_vin_number"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Plate #"
                        type="text"
                        name="car_plate_number"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Lic./Reg. Date"
                        type="date"
                        name="car_registration_date"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Gas"
                        type="text"
                        name="car_gas"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Tire Size"
                        type="text"
                        name="car_tire_size"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Oil Type"
                        type="text"
                        name="car_oil_type"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Current NADA - Retail"
                        type="number"
                        name="car_nada_retail"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Current NADA - Clean"
                        type="number"
                        name="car_nada_clean"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Current NADA - Average"
                        type="number"
                        name="car_nada_average"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Current NADA - Rough"
                        type="number"
                        name="car_nada_rough"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last Year's NADA - Retail"
                        type="number"
                        name="car_last_nada_retail"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last Year's NADA - Clean"
                        type="number"
                        name="car_last_nada_clean"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last Year's NADA - Average"
                        type="number"
                        name="car_last_nada_average"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last Year's NADA - Rough"
                        type="number"
                        name="car_last_nada_rough"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="MILES"
                        type="number"
                        name="car_miles"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last Change Oil"
                        type="date"
                        name="car_last_oil_change"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputTextArea
                        label="Turo Link"
                        name="car_turo_link"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputTextArea
                        label="Admin Turo Link"
                        name="car_admin_turo_link"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 flex justify-end w-full gap-2 px-6 mt-6 mb-4 modal__action">
                      <button
                        type="submit"
                        disabled={
                          (mutation.isPending || !props.dirty) && photo === null
                        }
                        className="relative btn-modal-submit"
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner />
                        ) : itemEdit ? (
                          "Save"
                        ) : (
                          "Add"
                        )}
                      </button>
                      <button
                        type="reset"
                        className="btn-modal-cancel"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddCar;
