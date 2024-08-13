import React, { useState } from "react";

const LogicsforQuote = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    customerType: "",
    name: "",
    address: {
      houseNumber: "",
      street: "",
      city: "",
      state: "",
      pinCode: "",
    },
    typeofRoof: {
      concrete: "",
      tinShade: "",
      others: "",
    },
    typeofOrganization: {
      schools: "",
      factories: "",
      petrolPumps: "",
      hospitals: "",
      others: "",
    },
    load: "",
    phone: "",
    email: "",
    length: "",
    breadth: "",
    sft: "",
    connectionType: "",
    subsidy: "",
    sanctionLoad: "",
    consumption: "",
    loadName: "",
    operation: "",
    capacity: "",
    equipmentName: "",
    equipments: "",
    electricityConnectivity: "",
    roofLength: "",
    roofBreadth: "",
    file: null,
    floorNumber: "",
    roofLayout: null,
    video: null,
    image: null,
    gstCertificate: null,
    identityProof: null,
    electricityBill: null,
    location: "",
  });
  const handleBack = () => {
    if (formData.customerType === "Commercial" && step > 0 && step <= 10) {
      setStep((prevStep) => prevStep - 1);
    } else if (
      formData.customerType === "Residential" &&
      step > 11 &&
      step <= 42
    ) {
      setStep((prevStep) => prevStep - 1);
    } else if (step > 14 && step <= 33) {
      setStep((prevStep) => prevStep - 1);
    } else if (step > 34 && step <= 42) {
      setStep((prevStep) => prevStep - 1);
    } else {
      setStep(0);
    }
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return (
          formData.name.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.email.trim() !== ""
        );
      case 2:
        return (
          formData.address.houseNumber.trim() !== "" &&
          formData.address.street.trim() !== "" &&
          formData.address.city.trim() !== "" &&
          formData.address.pinCode.trim() !== "" &&
          formData.address.state.trim() !== ""
        );

      case 4:
        return Object.values(formData.typeofOrganization).some(
          (value) => value.trim() !== ""
        );

      case 15:
      case 24:
        return (
          formData.load.trim() !== "" && formData.consumption.trim() !== ""
        );
      case 5:
      case 8:
        return (
          (formData.typeofRoof.concrete ||
            formData.typeofRoof.tinShade ||
            formData.typeofRoof.others) &&
          formData.length.trim() !== "" &&
          formData.breadth.trim() !== "" &&
          formData.sft.trim() !== ""
        );
      case 6:
      case 9:
      case 18:
      case 21:
      case 27:
      case 30:
      case 36:
      case 40:
        return (
          formData.roofLayout ||
          formData.video ||
          formData.image ||
          formData.electricityBill ||
          formData.gstCertificate ||
          formData.identityProof
        );
      case 7:
      case 10:
      case 19:
      case 22:
      case 28:
      case 31:
      case 37:
      case 41:
        return (
          formData.capacity.trim() !== "" && formData.location.trim() !== ""
        );

      //case 20:
      //case 23:
      //case 29:
      //case 32:
      //case 38:
      //case 42:
      //return formData.location.trim() !== "";
      case 16:
      case 25:
      case 35:
      case 39:
        return (
          formData.length &&
          formData.length !== "" &&
          formData.breadth &&
          formData.breadth !== "" &&
          formData.sft &&
          formData.sft !== "" &&
          formData.file
        );
      case 17:
      case 26:
        return formData.floorNumber !== "";
      case 33:
        return (
          formData.equipmentName.trim() !== "" &&
          formData.capacity.trim() !== "" &&
          formData.operation.trim() !== "" &&
          formData.equipments.trim() !== ""
        );

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handleOrganizationTypeChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      typeofOrganization: type,
    }));
  };
  const handleRoofTypeChange = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      typeofRoof: {
        ...prevData.typeofRoof,
        [type]: prevData.typeofRoof[type] === type ? "" : type,
      },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const changeHandle = (e, fileType) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fileType]: file,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true); // Update state to show the "Thank You" page
  };

  const isLastStep = [7, 10, 20, 23, 29, 32, 38, 42, 9].includes(step);

  return {
    step,
    formData,
    handleBack,
    handleNext,
    handleChange,
    changeHandle,
    handleSubmit,
    validateStep, // Make sure validateStep is included here
    isLastStep,
    setFormData,
    handleFileChange,
    handleOrganizationTypeChange,
    setStep,
    handleRoofTypeChange,
    isSubmitted,
  };
};

export default LogicsforQuote;
