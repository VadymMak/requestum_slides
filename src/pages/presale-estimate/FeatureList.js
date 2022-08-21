import React from "react";

import { featureTableHeader } from "../../constants/nav-titles";

const FeatureList = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isIdMatch, setIsIdMatch] = React.useState("0");

  const handleOpenClose = (e) => {
    setIsOpen((prev) => !prev);
    setIsIdMatch(e.target.id);
    console.log("E target: ", isIdMatch);
  };

  console.log("E target: ", isIdMatch);

  return (
    <div className="container feature">
      <div
        style={{
          position: "fixed",
          width: "75%",
          background: "#f9f9f9",
          zIndex: "2",
        }}
      >
        <div className="feature-title">
          <span>Feature list Example</span>
        </div>
        <table className="feature-table">
          <thead className="feature-table__head" style={{ width: "100%" }}>
            <tr className="feature-table__head-header">
              {featureTableHeader.map((element) => {
                return (
                  <th key={element.id} className="feature-table__head-row">
                    {element.title}
                  </th>
                );
              })}
            </tr>
          </thead>
        </table>
      </div>
      <table className="feature-table">
        <tbody className="feature-table__body" style={{ marginTop: "100px" }}>
          <tr style={{ display: "block", height: "110px" }}></tr>
          <tr
            className="feature-table__body-head"
            style={{ paddingTop: "10px" }}
          >
            <th
              style={{
                textAlign: "left",
                margin: "4px 0 7px 6px",
                width: "25%",
              }}
            >
              <button className="button" onClick={(e) => handleOpenClose(e)}>
                {!isOpen && (
                  <div
                    id="1"
                    className="feature-table__body-button button-close"
                  >
                    <span className="button-close__bar"></span>
                  </div>
                )}
                {isOpen && (
                  <div
                    id="1"
                    className="feature-table__body-button button-open"
                  >
                    <span className="button-open__bar"></span>
                  </div>
                )}
              </button>
            </th>
            <th style={{ width: "45%" }}>PUBLIC SITE AREA</th>
          </tr>
          {true && (
            <>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>Landing page</td>
                <td>
                  Landing page view: https://prnt.sc/115I7ak <br />
                  1. Button "Start" pops up this:https://prnt.sc/115I83w <br />
                  2. "GxP Suppliers" page (promotional page with call to action
                  - sign up). Example - https://www.rangeme.com/suppliers <br />
                  3. "Buyers" page (promotional page with call to action - Start
                  or Sign up) <br />
                  4. Search page:
                  <br />
                  Location : [EU] [TGA] [FDA] [IMC] [WHO] <br />
                  Search results is the list of Suppliers public profiles. Only
                  supplier profiles can be viewed which will include basic
                  information: <br />
                  - location,
                  <br />
                  - management team,
                  <br />
                  - contact details,
                  <br />
                  - facility photos,
                  <br />
                  - all pharma operating licenses
                  <br />
                  (It is legal to promote the services of a pharmaceutical
                  company to the public but not any products, product
                  information or indications (product use). Photos in public
                  profiles - suppliers profiles galleries (not products)
                  <br />
                  5. Map with facilities or headquaters locations
                </td>
                <td style={{ marginLeft: "20px" }}>List of criteria TBD</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Static pages</td>
                <td>Terms of Use, About us, Contact us</td>
                <td>Development team comments/assumptions</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Use behavior analitics</td>
                <td>Google analytics, events watching</td>
                <td>
                  https://cream.doccheck.com/com/ seems to provide it also
                </td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Multilanguage</td>
                <td>English, German, Spanish, Hebrew.</td>
                <td></td>
              </tr>
            </>
          )}
          <tr style={{ display: "block", height: "12px" }}></tr>
          <tr className="feature-table__body-head">
            <th
              style={{
                textAlign: "left",
                margin: "4px 0 7px 6px",
                width: "25%",
              }}
            >
              <button className="button" onClick={(e) => handleOpenClose(e)}>
                {!isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-close"
                  >
                    <span className="button-close__bar"></span>
                  </div>
                )}
                {isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-open"
                  >
                    <span className="button-open__bar"></span>
                  </div>
                )}
              </button>
            </th>
            <th style={{ width: "35%" }}>
              REGISTERED USER AREA (2 types of registered users: Supplier and
              Buyer)
            </th>
            <th></th>
          </tr>
          {!isOpen && (
            <>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>Authorization</td>
              </tr>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>Authorization standard</td>
                <td>Sign in/Sign up via email</td>
                <td>for Suppliers only</td>
              </tr>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>Authorization via LinkedIn</td>
                <td></td>
                <td>for Suppliers only</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Password recovery</td>
                <td>Send confirmation link and then update the password</td>
                <td>In case the user has forgotten the password</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Log out</td>
                <td></td>
                <td>In case the user has forgotten the password</td>
              </tr>
            </>
          )}
          <tr style={{ display: "block", height: "12px" }}></tr>
          <tr className="feature-table__body-head">
            <th
              style={{
                textAlign: "left",
                margin: "4px 0 7px 6px",
                width: "25%",
              }}
            >
              <button className="button" onClick={(e) => handleOpenClose(e)}>
                {!isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-close"
                  >
                    <span className="button-close__bar"></span>
                  </div>
                )}
                {isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-open"
                  >
                    <span className="button-open__bar"></span>
                  </div>
                )}
              </button>
            </th>
            <th style={{ width: "35%" }}>SUPPLIER</th>
            <th></th>
          </tr>
          {!isOpen && (
            <>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>Profile setup pages:</td>
                <td>
                  On editing thr uder sees his profile only as stepper
                  <br />
                  On publick view - hte user can choose one-page layout or
                  stepper view
                  <br /> (to browse Supplier`s profile in different modes)
                </td>
                <td>
                  1. Suppliers has public data and data he shares for public
                  access in his profile.
                  <br />
                  2. Supplier profile gets publicly available and searchable
                  ONLY after admin`s review and approval
                  <br />
                  3. Hidden data of profile is handled by:
                  <br />
                  - his subscription plan (for example, his contact data)
                  <br />
                  - "Public access" setting (eye icon) in his profile
                  <br />- "Share" function - manages sharing access to the
                  Products
                </td>
              </tr>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>- Company user</td>
                <td>
                  https://projects.invisionapp.com/d/main#/console/21507932/454579805/preview
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Company info</td>
                <td>
                  https://projects.invisionapp.com/d/main#/console/21507932/454579806/preview
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Operations and Facilities</td>
                <td>
                  1. Layout of this page (set of fields proposed for
                  fullfilling) dynamically changes depending on the user choices
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  2. Basically there 2 major types of Supplers: EUDRA guys and
                  NON-EUDRA guys
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  3. EUDRA guys Facilities initial screen view: <br />
                  https://projects.invisionapp.com/share/4C10NP0RN2H8#/screens/452078815
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  4. EUDRA guys facilities screen with search results (search is
                  condacted via the imported tables) <br />
                  https://projects.invisionapp.com/share/4C10NP0RN2H8#/screens/451752712
                </td>
                <td>
                  Search is conducted via all the imported tables. The results
                  are disaplayed in the respective sections (Domestic operating
                  licenses, API scope & Registrators and GxP certificates)
                  depending on in which table the result is found (p.7)
                </td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  5. Chose operations section provides types of suppliers. They
                  can be:
                  <br />
                  Wholesaler
                  <br />
                  Distributor
                  <br />
                  Cultivator
                  <br />
                  Integrated
                  <br />
                  Other
                  <br />
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  6. Facility naming (tab name) - taken as country from location
                  and enable in the future
                </td>
                <td>To discuss with team whether it is possible</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  7. All the documents found in the imported tables^ are
                  displayed under the respective section of Licences,
                  Sertificates and Registrations:
                  <br />
                  - Domestic licences - WDA, MAI, MHRA tables
                  <br />
                  - GxP certificates - GDP, GMP and Non-compliance report
                  <br />- API scope and Registations - API
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td></td>
                <td>
                  Can have: <br />
                  - Grid view:
                  https://projects.invisionapp.com/share/4C10NP0RN2H8#/screens/452795974
                  <br />
                  - List view:
                  https://projects.invisionapp.com/share/4C10NP0RN2H8#/screens/453352297
                  <br />
                  Displays: <br />- Switching between services and products
                  lists
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Single Product</td>
                <td>
                  1. Creating a product, upload photo, documents, pricing,
                  description
                  <br />
                  2. On preview - to display GMP Approvals from the facility
                  that is chosen on the product creation page. Yhe field on
                  approvals should be a link to Facility tab
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Dashboard</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Quote request list</td>
                <td>
                  1. Supplier can trade and send QQR to other Suppliers <br />
                  2. QR can be sent outside connections <br />
                  3. QR can be deleted by the author no matter if it was aswered
                  or no
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Notification about Quote request</td>
                <td>
                  Email notification about a user requesting a quote for N
                  quality
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Chats</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Requests for a chat opening</td>
                <td>
                  Request can be sent: <br />
                  - only to a particular Supplier
                  <br />
                  - only by the registered Buyer
                  <br />
                  *unregistered user can not send request
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Messaging</td>
                <td>One-to-one chat(not group chats)</td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Online statuses of the users</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Chat messaging export</td>
                <td></td>
                <td>may we suggest to postpone it for the future</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Chat list</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Electronic sign service</td>
                <td>
                  HelloSign or alike service integration. Adobe of Docusign
                </td>
                <td></td>
              </tr>
            </>
          )}
          <tr style={{ display: "block", height: "12px" }}></tr>
          <tr className="feature-table__body-head">
            <th
              style={{
                textAlign: "left",
                margin: "4px 0 7px 6px",
                width: "25%",
              }}
            >
              <button className="button" onClick={(e) => handleOpenClose(e)}>
                {!isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-close"
                  >
                    <span className="button-close__bar"></span>
                  </div>
                )}
                {isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-open"
                  >
                    <span className="button-open__bar"></span>
                  </div>
                )}
              </button>
            </th>
            <th style={{ width: "35%" }}>BUYER</th>
            <th></th>
          </tr>
          {true && (
            <>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>Dashboard</td>
                <td>Fully duoplicates the supplier`s functionality`</td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Buyers types</td>
                <td>
                  Hospital
                  <br />
                  Clinic
                  <br />
                  Pharmacy
                  <br />
                  Other
                  <br />
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Chats list</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>My requests</td>
                <td>List of quote requests and sourcing requests</td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Q&A Forum</td>
                <td>
                  Messaging group rooms, non-realtime updating. (Simila to
                  Reddit or Doccheck alse have a forum)7 Supplier cannot ask
                  questions they can only respond. This is because it is illegal
                  to solist product information. Thi is for doctors, phosoans
                  only to ask manufactures about product usage, prescribing,
                  legal or compounding requirements etc. Buyers ask yhe
                  questions. Suppliers only answer
                </td>
                <td>Expert advices for healthcare professionals</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Post quesion</td>
                <td>For buyer role only</td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>- Post answer/comments</td>
                <td>For suppliers role only</td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>News feed</td>
                <td>
                  Allow to post own news
                  <br />
                  Posting corporate announsments to target audience / Staying
                  up-to-date with industry insights
                </td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Sourcing request list</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Password recovery</td>
                <td>Post sourcing requests to an other memebers</td>
                <td>
                  If a potential buyer does not find the exact product he needs
                  - he can post a request for that product. A byuer can deside
                  which sellers will receive (or not) a notification when a new
                  Product Request is created. A quote from a seller can only be
                  seen by the buyer that requested the product, and the
                  negotiation between the parties is only available to these 2
                  parties. <br />
                  When it comes to placing Product Request of Spot
                  Offers(immediately availiability request), the company desides
                  whether to remain anonymous or to display thr name of the
                  company
                </td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Sourcing request creation</td>
                <td>
                  Public (Notification to all Suppliers) and direct
                  (Notification to the Supplier chosen)
                </td>
                <td></td>
              </tr>
            </>
          )}
          <tr style={{ display: "block", height: "12px" }}></tr>
          <tr className="feature-table__body-head">
            <th
              style={{
                textAlign: "left",
                margin: "4px 0 7px 6px",
                width: "25%",
              }}
            >
              <button className="button" onClick={(e) => handleOpenClose(e)}>
                {!isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-close"
                  >
                    <span className="button-close__bar"></span>
                  </div>
                )}
                {isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-open"
                  >
                    <span className="button-open__bar"></span>
                  </div>
                )}
              </button>
            </th>
            <th style={{ width: "35%" }}>ADMIN AREA</th>
            <th></th>
          </tr>
          {true && (
            <>
              <tr style={{ height: "12px" }}></tr>
              <tr>
                <td>List of Users</td>
                <td></td>
                <td>details TBD</td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>List of chats</td>
                <td>Admin ability to join any chat</td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Chats list</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ display: "block", height: "12px" }}></tr>
              <tr>
                <td>Orders</td>
                <td>
                  - Total turnover <br />- Search by Supplier
                  <br />- Serarch by Buyer
                </td>
                <td>details TBD</td>
              </tr>
            </>
          )}

          <tr style={{ display: "block", height: "12px" }}></tr>
          <tr className="feature-table__body-head">
            <th
              style={{
                textAlign: "left",
                margin: "4px 0 7px 6px",
                width: "25%",
              }}
            >
              <button className="button" onClick={(e) => handleOpenClose(e)}>
                {!isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-close"
                  >
                    <span className="button-close__bar"></span>
                  </div>
                )}
                {isOpen && (
                  <div
                    id="2"
                    className="feature-table__body-button button-open"
                  >
                    <span className="button-open__bar"></span>
                  </div>
                )}
              </button>
            </th>
            <th style={{ width: "35%" }}>ASSUMPTIONS AND OPEN QUESTIONS</th>
            <th></th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should KYC service be integrated to verify the user`s age/identity
              on accessing the products Suppliers published
            </td>
            <td style={{ width: "50%" }}>https://cream.doccheck.com/com</td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should product galleries be non-available for unregistered users?
            </td>
            <td style={{ width: "50%" }}>
              yes. Only supplier profiles can be viewed which will include basic
              information (location, management team, contact details, facility
              photos and all pharma operating licenses). Once logged in, buyers
              will connect with a supplier. Each supplier will then give access
              rights(either to the viewproducts or to view compliance product
              data packs or both ). Some suppliers may require buyer to sign an
              NDA. This would be digitally signed inside the platform prior to
              enterting their shop inside our marketplace.
            </td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should requesting a quote and sourcing request functionalities be
              available for unregistered user?
            </td>
            <td style={{ width: "50%" }}>No</td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should chat functionality be available ONLY for reqistered user?
            </td>
            <td style={{ width: "50%" }}>Yes</td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should chat messages EXPORT be available for both participants or
              only some role (Supplier/Buyer)?
            </td>
            <td style={{ width: "50%" }}>
              All members to platform must be able to dounload a complete audit
              trial of digital communications and document exchange.
            </td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should Admin be able to join users`s chat? What about closed
              chats?
            </td>
            <td style={{ width: "50%" }}>not sure</td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              On what event should the chat be created (Automatic creating a
              chat room on sending a quote request/"Chat with the Supplier"
              feature available for any regidtered user)?
            </td>
            <td style={{ width: "50%" }}>
              It one wants to chat to a supplier they must reqister so yhat we
              can ask the supplier to approve the connection request. The
              corporate profile will be similar th their own online webshops
              with contact information. Suppliers CANNOT sollcit buyers with the
              neccessary product information7 Pharmacist must approach the
              supplier directly. SUpplier will want to know who is that is
              requesting products availiability or pricing(this can be highly
              confidential information) Supplier will receive the message and
              can decide to accept or reject. It is possible I will provide
              INMAIL services like linkedin(do not need connect with supplier to
              message them). Follow the Linkedin user journey please. Most of my
              client are currently using Linkedin. There I must connect with
              colleagues before I can message them. Linkedin is not legally
              compliant to post product information and I will drive their usage
              to my platform for healthcare professionals only and not the
              public.
            </td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              Should the system send notifications about a new source request
              posting?
            </td>
            <td style={{ width: "50%" }}>
              Definatelly. Notifications are key to engagement. Message, request
              for quotes, new posts from connections etc.
            </td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              <strong>
                Admin panel is Assumed to be Drupal default - goes out of the
                box
              </strong>
            </td>
            <td style={{ width: "50%" }}></td>
          </tr>
          <tr style={{ height: "12px" }}></tr>
          <tr style={{ width: "100%" }}>
            <td
              style={{
                width: "68%%",
                paddingLeft: "30px",
                paddingRight: "50px",
              }}
            >
              What information and functionality should be available in the
              admin panel beside:
              <br />
              - List of users, ablity to block/unblock them
              <br />
              - Suppliers product list
              <br />
              - Suppliers profile(with documents uploaded)
              <br />
              - Chats
              <br />
              Modt popular products, requests, popular products
            </td>
            <td style={{ width: "50%" }}>
              <strong>
                is this the buyer dashboard? View corporate profiles and their
                products, RFQs, News Feed, Q&A Forum, Chat & Messaging. Suppler
                and product compliance document cloud storage with ammendment
                tracking, status updates and digital signage. User activity,
                connections, followers.
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeatureList;
