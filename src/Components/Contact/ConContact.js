import React, { useState } from "react";
import { useReducer } from "react";
import apidata from "../../API/api";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const reducer = (state, action) => {
  // console.log(action);
  return { ...state, [action.type]: action.value };
};

export default function ConContact() {
  const [contactData, dispatch] = useReducer(reducer, initialState);
  const [alert, setAlert] = useState(false);
  const [Error, setError] = useState("");

  function submitData(e) {
    e.preventDefault();
    setError("");
    if (!contactData.name) {
      setError("Please Enter Name");
      return;
    }
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!contactData.email.match(validRegex)) {
      setError("Please Enter Correct email Id");
      return;
    }
    // console.log(contactData);
    apidata("contactcreateview", "post", contactData).then((res) => {
      // console.log(res.status);
      if (res.status === 200 || res.status === 201) {
        setAlert(true);
        dispatch({ type: "name", value: "" });
        dispatch({ type: "email", value: "" });
        dispatch({ type: "subject", value: "" });
        dispatch({ type: "message", value: "" });
      } else {
        setAlert(false);
        setError("Some Problem Occured, Please try again.");
      }
    });
  }

  return (
    <>
      <section id="page-content-wrap">
        <div className="contact-page-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="shadow-soft roundedImg">
                  <div className="row p-4">
                    {/* <div className="col-lg-5">
                      <!-- Map Area Start -->
                      <div className="map-area-wrap">
                        <iframe
                          src="https://snazzymaps.com/embed/75079"
                          title="unique"></iframe>
                      </div>
                      <!-- Map Area End -->
                    </div> */}

                    <div className="col-lg-6 m-auto">
                      <div className="contact-form-wrap">
                        <h3>Send Message</h3>
                        <form action="#" id="cbx-contact-form">
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="cbxname">Name</label>
                                <input
                                  type="text"
                                  name="cbxname"
                                  required
                                  id="cbxname"
                                  className="form-control"
                                  value={contactData.name}
                                  onChange={(e) =>
                                    dispatch({
                                      type: "name",
                                      value: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="cbxemail">Email</label>
                                <input
                                  type="email"
                                  name="cbxemail"
                                  required
                                  id="cbxemail"
                                  className="form-control"
                                  value={contactData.email}
                                  onChange={(e) =>
                                    dispatch({
                                      type: "email",
                                      value: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="cbxsubject">Subject</label>
                            <input
                              type="text"
                              name="cbxsubject"
                              id="cbxsubject"
                              className="form-control"
                              value={contactData.subject}
                              onChange={(e) =>
                                dispatch({
                                  type: "subject",
                                  value: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="cbxmessage">Message</label>
                            <textarea
                              name="cbxmessage"
                              id="cbxmessage"
                              rows="10"
                              cols="80"
                              className="form-control"
                              value={contactData.message}
                              onChange={(e) =>
                                dispatch({
                                  type: "message",
                                  value: e.target.value,
                                })
                              }
                            ></textarea>
                          </div>
                          {/* <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cbxsendme"
                              name="cbxsendme"
                              value="on"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cbxsendme">
                              Send Me CC
                            </label>
                          </div> */}

                          <button
                            className="btn roundedImg shadowBtn mb-3 conBtn"
                            onClick={submitData}
                          >
                            Send
                          </button>
                          {alert ? (
                            <div id="cbx-formalert">
                              Your Data Has Been Submitted Successfully
                            </div>
                          ) : Error?.length ? (
                            <p className="dataSubRed">{Error}</p>
                          ) : (
                            ""
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
