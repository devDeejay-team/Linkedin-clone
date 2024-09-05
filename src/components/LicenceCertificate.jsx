import React, { useContext } from "react";
import placeholder from "../assets/placeholder.svg";
import "../stylesheet/licence.css";
import TableDataUtils from "../utils/TableDataUtils";
import Context from "../context/Context";

const LicenceCertificate = () => {
  const context = useContext(Context);
  const { profile } = context;
  return (
    <div className="card mt-3 shadow licence-card">
      <div className="mx-3 my-2">
        <h3>Licence& certifications</h3>
        <div className=" licence-list">
          {profile?.certifications?.map((certificate, index) => {
            return (
              certificate?.["Certificate name"] && (
                <div key={index}>
                  <TableDataUtils
                    boldName={certificate["Certificate name"]}
                    address={certificate["issued by"]}
                    date={certificate["issued date"]}
                    img={placeholder}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LicenceCertificate;
