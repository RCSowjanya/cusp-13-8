import React, { useState } from "react";
import quote from "../Images/quote.webp";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import LogicsforQuote from "./LogicsforQuote";
import { MdOutlineHouse } from "react-icons/md";
import YourName from "./YourName";
import FullAddress from "./FullAddress";
import ContactDetails from "./ContactDetails";
import TypeofOrganization from "./TypeofOrganization";
import CurrentSanction from "./CurrentSanction";
import TypeofRoof from "./TypeofRoof";
import AttachmentsSection from "./AttachmentsSection";
import CapacitytoInstall from "./CapacitytoInstall";
import LocationDetails from "./LocationDetails";
import TotalroofArea from "./TotalroofArea";
import Installation from "./Installation";
import PeakLoad from "./PeakLoad";

const GetQuote = () => {
  const {
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
    isSubmitted,
    handleRoofTypeChange,
  } = LogicsforQuote();

  const [isEmpanelled, setIsEmpanelled] = useState(true);

  const handleToggle = () => {
    setIsEmpanelled(!isEmpanelled);
  };
  return (
    <div>
      <div className="relative bg-house max-[600px]:h-auto">
        <div className="flex items-start max-[600px]:items-center max-[600px]:flex-col  pt-[5%] ml-[2%] max-[600px]:ml-0">
          <div className=" h-auto flex items-start">
            <img
              src={quote}
              className="w-full h-full object-cover mt-[15%]"
              alt="getquote"
            />
          </div>
          <div className="w-[65%] border max-[600px]:w-full  rounded-xl bg-white border-[#FFAC0B] flex flex-col justify-center py-11 px-4 mt-[5%] shadow-custom">
            {isSubmitted ? (
              <div className="flex justify-center items-center py-[10%]">
                <div className="text-center">
                  <h1 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 ad">
                    Thank You For Your submission
                  </h1>
                  <p className="text-[14px] font-[500]">
                    We have successfully received your submission and our team
                    will review your information shortly. Your inquiry is
                    important to us, and we aim to respond as quickly as
                    possible.
                  </p>
                  <button className="bg-[#0BB68D] text-white px-11 py-2 rounded-md mt-6">
                    Ok
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {step === 0 && (
                  <div>
                    <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 ad">
                      Type of Customer
                    </h2>
                    <div className="flex gap-4 my-[2%] w-full max-[1000px]:flex-col items-center justify-center">
                      <div>
                        <p
                          className="group border-2 border-[#D3900D] hover:bg-[#D3900D] hover:text-white flex gap-3 text-[16px] text-[#D3900D] rounded-full px-16 py-3 cursor-pointer"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              customerType: "Residential",
                            });
                            setStep(11);
                          }}
                        >
                          <MdOutlineHouse
                            size={20}
                            className="text-[#D3900D] group-hover:text-white transition-colors duration-300"
                          />
                          <span className="group-hover:text-white">
                            Residential
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                          className="group border-2 border-[#D3900D] hover:bg-[#D3900D] hover:text-white flex gap-3 text-[16px] text-[#D3900D] rounded-full px-16 py-3 cursor-pointer"
                          onClick={() => {
                            setFormData({
                              ...formData,
                              customerType: "Commercial",
                            });
                            setStep(1);
                          }}
                        >
                          <MdOutlineHouse
                            size={20}
                            className="text-[#D3900D] group-hover:text-white transition-colors duration-300"
                          />
                          <span className="group-hover:text-white">
                            Commercial
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {formData.customerType === "Residential" && (
                  <div className="mx-7">
                    <div>
                      {step === 11 && (
                        <YourName
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 12 && (
                        <FullAddress
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}

                      {/*---onGrid and offGrid steps----*/}
                      {step === 13 && (
                        <div>
                          <h2 className="text-[#004A9C]  font-[600] text-[16px] text-center pb-6">
                            Connection Type
                          </h2>
                          <div className="flex gap-6 my-[4%] w-full max-[1000px]:flex-col items-center justify-center">
                            <h4
                              className="flex gap-3 hover:bg-[#D3900D] text-[#D3900D] hover:text-white font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  connectionType: "Ongrid",
                                });
                                setStep(12); // Start ongrid steps
                              }}
                            >
                              On Grid
                            </h4>
                            <h4
                              className="border border-[#D3900D] rounded-full font-[600] hover:bg-[#D3900D] hover:text-white text-[#D3900D] flex gap-3 px-20 py-2 text-[16px] cursor-pointer"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  connectionType: "Offgrid",
                                });
                                setStep(33); // Start offgrid steps
                              }}
                            >
                              Off Grid
                            </h4>
                          </div>
                        </div>
                      )}

                      {/*-----on Grid steps-start---*/}
                      {step >= 13 && step < 33 && (
                        <div>
                          {step === 13 && (
                            <div className="flex items-center space-x-3">
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6">
                                Need Subsidy?
                              </h2>
                              <div
                                onClick={handleToggle}
                                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                                  isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
                                }`}
                              >
                                <div
                                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                    isEmpanelled
                                      ? "translate-x-8"
                                      : "translate-x-0"
                                  }`}
                                />
                              </div>
                              <span
                                className={`text-[14px] font-semibold ${
                                  isEmpanelled
                                    ? "text-[#0BB68D]"
                                    : "text-gray-400"
                                }`}
                              >
                                {isEmpanelled ? "Yes" : "No"}
                              </span>
                            </div>
                          )}

                          {/*---on Grid Need Subsidy yes and No steps start here---*/}
                          {/*--On Grid-Need Subsidy Yes Steps start here---*/}
                          {step === 13 && (
                            <CurrentSanction
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {step === 14 && (
                            <TotalroofArea
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 15 && (
                            <Installation
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 16 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                Roof Rights
                              </h2>
                              <div className="flex gap-4 max-[1000px]:flex-col w-full items-center justify-center text-[16px] font-[400]">
                                <button
                                  className="hover:bg-[#D3900D]    text-[#D3900D] hover:text-white font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer"
                                  onClick={() => setStep(18)} // Start "Yes" screens at step 18
                                >
                                  Yes
                                </button>
                                <button
                                  className="border border-[#D3900D] rounded-full font-[600] hover:bg-[#D3900D] hover:text-white text-[#D3900D] flex gap-3 px-20 py-2 text-[16px] cursor-pointer"
                                  onClick={() => setStep(21)} // Start "No" screens at step 21
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          )}

                          {/*---on Grid-Need subsidy-Roof Rights Yes and No Steps here---*/}
                          {/*---on Grid-Need subsidy-Roof Rights YesSteps here---*/}
                          {step >= 17 && step < 21 && (
                            <div>
                              {step === 17 && (
                                <AttachmentsSection
                                  formData={formData}
                                  changeHandle={changeHandle}
                                />
                              )}
                              {step === 18 && (
                                <CapacitytoInstall
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 19 && (
                                <LocationDetails
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                            </div>
                          )}

                          {/*---on Grid-Need subsidy-Roof Rights Yes Steps end here---*/}
                          {/*---on Grid-Need subsidy-Roof Rights Yes- No Steps start here---*/}
                          {step >= 20 && step < 23 && (
                            <div>
                              {step === 20 && (
                                <AttachmentsSection
                                  formData={formData}
                                  changeHandle={changeHandle}
                                />
                              )}
                              {step === 21 && (
                                <CapacitytoInstall
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 22 && (
                                <LocationDetails
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                            </div>
                          )}

                          {/*---on Grid-Need subsidy-Roof Rights Yes NO Steps end here---*/}
                          {/*---on Grid-Need subsidy-Roof Rights Yes and No Steps end here---*/}
                          {/*---On Grid Need Subsidy Yes steps end---*/}
                          {/*---On Grid Need Subsidy No Steps start Here---*/}
                          {step >= 23 && step < 34 && (
                            <div>
                              {step === 23 && (
                                <CurrentSanction
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 24 && (
                                <TotalroofArea
                                  formData={formData}
                                  handleChange={handleChange}
                                  handleFileChange={handleFileChange}
                                />
                              )}
                              {step === 25 && (
                                <Installation
                                  formData={formData}
                                  handleChange={handleChange}
                                  handleFileChange={handleFileChange}
                                />
                              )}

                              {step === 26 && (
                                <div>
                                  <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                    Roof Rights
                                  </h2>
                                  <div className="flex gap-4 max-[1000px]:flex-col my-[4%] w-full items-center justify-center">
                                    <button
                                      className="hover:bg-[#D3900D]    text-[#D3900D] hover:text-white font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer"
                                      onClick={() => setStep(27)} // Start "Yes" screens at step 27
                                    >
                                      Yes
                                    </button>
                                    <button
                                      className="border border-[#D3900D] rounded-full font-[600] hover:bg-[#D3900D] hover:text-white text-[#D3900D] flex gap-3 px-20 py-2 text-[16px] cursor-pointer"
                                      onClick={() => setStep(30)} // Start "No" screens at step 30
                                    >
                                      No
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {/*----On Grid-No-Need Subsidy-Roof rights Yes and No steps start here----*/}
                          {/*---On Grid-No-Need Subsidy-Roof rights Yes  Steps Start Here----*/}
                          {step >= 27 && step < 30 && (
                            <div>
                              {step === 27 && (
                                <AttachmentsSection
                                  formData={formData}
                                  changeHandle={changeHandle}
                                />
                              )}
                              {step === 28 && (
                                <CapacitytoInstall
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 29 && (
                                <LocationDetails
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                            </div>
                          )}
                          {/*---On Grid-No-Need Subsidy-Roof rights Yes Steps End Here----*/}
                          {/*---On Grid-No-Need Subsidy-Roof rights  No Steps Start Here----*/}
                          {step >= 30 && step < 33 && (
                            <div>
                              {step === 30 && (
                                <AttachmentsSection
                                  formData={formData}
                                  changeHandle={changeHandle}
                                />
                              )}
                              {step === 31 && (
                                <CapacitytoInstall
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                              {step === 32 && (
                                <LocationDetails
                                  formData={formData}
                                  handleChange={handleChange}
                                />
                              )}
                            </div>
                          )}
                          {/*---On Grid Need Subsidy No Steps End here}
             {/*---on Grid  Need Subsidy yes and No steps end here}
             {/*---on Grid steps end----*/}
                        </div>
                      )}
                      {/*----Off Grid steps start----*/}
                      {step >= 33 && (
                        <div>
                          {step === 33 && (
                            <PeakLoad
                              formData={formData.load}
                              handleChange={handleChange}
                            />
                          )}
                          {step === 34 && (
                            <div>
                              <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-6 pt-4">
                                Electricity Connectivity
                              </h2>
                              <div className="flex gap-4 max-[1000px]:flex-col my-[4%] w-full items-center justify-center">
                                <button
                                  className="hover:bg-[#D3900D]    text-[#D3900D] hover:text-white font-[600] rounded-full px-20 py-2 text-[16px] cursor-pointer"
                                  onClick={() => setStep(35)} // Start "Yes" screens at step 35
                                >
                                  Yes
                                </button>
                                <button
                                  className="border border-[#D3900D] rounded-full font-[600] hover:bg-[#D3900D] hover:text-white text-[#D3900D] flex gap-3 px-20 py-2 text-[16px] cursor-pointer"
                                  onClick={() => setStep(39)} // Start "No" screens at step 39
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          )}
                          {/*--- Electricity Connectivity yes screens----*/}
                          {step === 35 && (
                            <TotalroofArea
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 36 && (
                            <AttachmentsSection
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 37 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {step === 38 && (
                            <LocationDetails
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {/*--- Electricity Connectivity yes screens end----*/}
                          {/*--- Electricity Connectivity No screens----*/}
                          {step === 39 && (
                            <TotalroofArea
                              formData={formData}
                              handleChange={handleChange}
                              handleFileChange={handleFileChange}
                            />
                          )}
                          {step === 40 && (
                            <AttachmentsSection
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 41 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {step === 42 && (
                            <LocationDetails
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                          {/*--- Electricity Connectivity No screens-end---*/}
                        </div>
                      )}
                      {/*---Off Grid steps end----*/}
                      {/*----Residential steps end----*/}
                    </div>
                  </div>
                )}
                {formData.customerType === "Commercial" && (
                  <div className="mx-7">
                    <div>
                      {step === 1 && (
                        <YourName
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 2 && (
                        <FullAddress
                          formData={formData}
                          handleChange={handleChange}
                        />
                      )}
                      {step === 3 && (
                        <TypeofOrganization
                          formData={formData}
                          handleOrganizationTypeChange={
                            handleOrganizationTypeChange
                          }
                        />
                      )}

                      {step === 4 && (
                        <div>
                          <CurrentSanction
                            formData={formData}
                            handleChange={handleChange}
                          />
                          <div className="flex items-center justify-center space-x-3 mt-9">
                            <h2 className="text-[#004A9C] font-[600] text-[16px] text-center">
                              Need Battery Backup
                            </h2>
                            <div
                              onClick={handleToggle}
                              className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                                isEmpanelled ? "bg-[#0BB68D]" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                                  isEmpanelled
                                    ? "translate-x-8"
                                    : "translate-x-0"
                                }`}
                              />
                            </div>
                            <span
                              className={`text-[14px] font-semibold ${
                                isEmpanelled
                                  ? "text-[#0BB68D]"
                                  : "text-gray-400"
                              }`}
                            >
                              {isEmpanelled ? "Yes" : "No"}
                            </span>
                          </div>
                        </div>
                      )}

                      {isEmpanelled ? (
                        <div>
                          {step === 5 && (
                            <TypeofRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleRoofTypeChange={handleRoofTypeChange}
                            />
                          )}
                          {step === 6 && (
                            <AttachmentsSection
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 7 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                        </div>
                      ) : (
                        <div>
                          {step === 8 && (
                            <TypeofRoof
                              formData={formData}
                              handleChange={handleChange}
                              handleRoofTypeChange={handleRoofTypeChange}
                            />
                          )}
                          {step === 9 && (
                            <AttachmentsSection
                              formData={formData}
                              changeHandle={changeHandle}
                            />
                          )}
                          {step === 10 && (
                            <CapacitytoInstall
                              formData={formData}
                              handleChange={handleChange}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-8 mt-8 w-full">
                  <button
                    className="border-2 border-[#0BB68D] text-[16px] font-[400] rounded-md px-8 py-2 items-center text-[#0BB68D] flex gap-3"
                    onClick={handleBack}
                  >
                    <FiArrowLeftCircle className="" />
                    Back
                  </button>

                  <button
                    className={`border-2 text-[16px] border-[#0BB68D] font-[400] px-8 py-2 flex rounded-md items-center gap-3 ${
                      validateStep()
                        ? "bg-[#0BB68D] text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                    onClick={isLastStep ? handleSubmit : handleNext}
                    disabled={!validateStep()}
                  >
                    {isLastStep ? "Submit" : "Next"}
                    <FiArrowRightCircle className="" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
