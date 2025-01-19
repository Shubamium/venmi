import React from "react";
import "./waitlist.scss";
import { fetchData } from "../../../db/db";
type Props = {};

export default async function Waitlist({}: Props) {
  const wl = await fetchData<any[]>(`
			*[_type == 'waitlist']{
			 ...,
			}
	`);

  let pending = [];
  let working = [];
  let completed = [];

  while (wl.length > 0) {
    const popped = wl.pop();
    switch (popped.status) {
      case "pending":
        pending.push(popped);
        break;
      case "wip":
        working.push(popped);
        break;
      case "completed":
        completed.push(popped);
        break;
    }
  }
  return (
    <main id="page_waitlist">
      <section id="wl-header" className="confine">
        <div className="heading">
          <svg
            width="85"
            height="21"
            viewBox="0 0 85 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tilda"
          >
            <path
              d="M37.5 6.99513L35.4224 9.15929L37.5 6.99513ZM84.1213 9.11645C85.2929 7.94488 85.2929 6.04538 84.1213 4.87381C82.9497 3.70224 81.0503 3.70224 79.8787 4.87381L84.1213 9.11645ZM3.88028 15.8328C7.51247 12.9112 13.5549 9.11107 19.7584 7.19962C26.0361 5.26529 31.6012 5.49091 35.4224 9.15929L39.5776 4.83097C33.3988 -1.10064 25.0472 -0.708364 17.9916 1.46564C10.8618 3.66253 4.1542 7.91237 0.119724 11.1575L3.88028 15.8328ZM35.4224 9.15929C41.9774 15.4521 49.7337 19.9262 58.2396 20.4886C66.85 21.0579 75.6549 17.5829 84.1213 9.11645L79.8787 4.87381C72.3451 12.4074 65.1499 14.9324 58.6354 14.5017C52.0163 14.064 45.5226 10.5381 39.5776 4.83097L35.4224 9.15929Z"
              fill="white"
            />
          </svg>

          <h2 className="hs">WAITLIST</h2>
          <svg
            width="85"
            height="21"
            viewBox="0 0 85 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tilda"
          >
            <path
              d="M37.5 6.99513L35.4224 9.15929L37.5 6.99513ZM84.1213 9.11645C85.2929 7.94488 85.2929 6.04538 84.1213 4.87381C82.9497 3.70224 81.0503 3.70224 79.8787 4.87381L84.1213 9.11645ZM3.88028 15.8328C7.51247 12.9112 13.5549 9.11107 19.7584 7.19962C26.0361 5.26529 31.6012 5.49091 35.4224 9.15929L39.5776 4.83097C33.3988 -1.10064 25.0472 -0.708364 17.9916 1.46564C10.8618 3.66253 4.1542 7.91237 0.119724 11.1575L3.88028 15.8328ZM35.4224 9.15929C41.9774 15.4521 49.7337 19.9262 58.2396 20.4886C66.85 21.0579 75.6549 17.5829 84.1213 9.11645L79.8787 4.87381C72.3451 12.4074 65.1499 14.9324 58.6354 14.5017C52.0163 14.064 45.5226 10.5381 39.5776 4.83097L35.4224 9.15929Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim
          ex, vehicula vel pretium molestie, porttitor ullamcorper elit. Nunc id
          elit ut justo pulvinar lacinia.
        </p>
      </section>

      <section id="wl-list" className="confine">
        <div className="waitlist pd">
          <div className="heading">
            <svg
              width="199"
              height="142"
              viewBox="0 0 199 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.284 26.279C19.955 26.5875 19.5962 26.8649 19.2076 27.1081C15.06 29.7033 8.87504 27.5412 4.34328 22.2863C2.59293 35.7194 5.78089 56.0987 13.8317 77.5411C26.7414 111.924 47.2662 136.021 59.6752 131.361C72.0842 126.702 71.6783 95.0521 58.7686 60.6689C50.982 39.9302 40.425 22.9341 30.5494 13.7329C30.2658 14.0416 29.9426 14.3126 29.5802 14.5394C29.1206 14.8269 28.6245 15.0267 28.1044 15.1439C29.7814 19.5382 29.0431 23.9938 26.0357 25.8755C24.3832 26.9095 22.3314 26.9876 20.284 26.279Z"
                fill="#923E4D"
              />
              <ellipse
                cx="152.352"
                cy="70.6807"
                rx="24"
                ry="66.5"
                transform="rotate(21.1234 152.352 70.6807)"
              />
            </svg>

            <h2 className="sta-cat">PENDING</h2>
          </div>
          <div className="list">
            {pending ? (
              pending.map((pd) => {
                return (
                  <div className="wl-item">
                    <div className="general">
                      <h2 className="name">{pd.username}</h2>
                      <p className="item-bought">{pd.item}</p>
                    </div>
                    <div className="info">
                      <div className="date">
                        <p>{pd.date}</p>
                      </div>
                      <div className="payment">
                        <p>{pd.payment}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty">
                <p>Nothing to see here...</p>
              </div>
            )}
          </div>
        </div>
        <div className="waitlist wo">
          <div className="heading">
            <svg
              width="199"
              height="142"
              viewBox="0 0 199 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.284 26.279C19.955 26.5875 19.5962 26.8649 19.2076 27.1081C15.06 29.7033 8.87504 27.5412 4.34328 22.2863C2.59293 35.7194 5.78089 56.0987 13.8317 77.5411C26.7414 111.924 47.2662 136.021 59.6752 131.361C72.0842 126.702 71.6783 95.0521 58.7686 60.6689C50.982 39.9302 40.425 22.9341 30.5494 13.7329C30.2658 14.0416 29.9426 14.3126 29.5802 14.5394C29.1206 14.8269 28.6245 15.0267 28.1044 15.1439C29.7814 19.5382 29.0431 23.9938 26.0357 25.8755C24.3832 26.9095 22.3314 26.9876 20.284 26.279Z"
                fill="#923E4D"
              />
              <ellipse
                cx="152.352"
                cy="70.6807"
                rx="24"
                ry="66.5"
                transform="rotate(21.1234 152.352 70.6807)"
                fill="#923E4D"
              />
            </svg>

            <h2 className="sta-cat">WORKING ON</h2>
          </div>
          <div className="list">
            {working && working.length > 0 ? (
              working.map((wk) => {
                return (
                  <div className="wl-item">
                    <div className="general">
                      <h2 className="name">{wk.username}</h2>
                      <p className="item-bought">{wk.item}</p>
                    </div>
                    <div className="info">
                      <div className="date">
                        <p>{wk.date}</p>
                      </div>
                      <div className="payment">
                        <p>{wk.payment}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty">
                <p>Nothing to see here...</p>
              </div>
            )}
          </div>
        </div>
        <div className="waitlist c">
          <div className="heading">
            <svg
              width="199"
              height="142"
              viewBox="0 0 199 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.284 26.279C19.955 26.5875 19.5962 26.8649 19.2076 27.1081C15.06 29.7033 8.87504 27.5412 4.34328 22.2863C2.59293 35.7194 5.78089 56.0987 13.8317 77.5411C26.7414 111.924 47.2662 136.021 59.6752 131.361C72.0842 126.702 71.6783 95.0521 58.7686 60.6689C50.982 39.9302 40.425 22.9341 30.5494 13.7329C30.2658 14.0416 29.9426 14.3126 29.5802 14.5394C29.1206 14.8269 28.6245 15.0267 28.1044 15.1439C29.7814 19.5382 29.0431 23.9938 26.0357 25.8755C24.3832 26.9095 22.3314 26.9876 20.284 26.279Z"
                fill="#923E4D"
              />
              <ellipse
                cx="152.352"
                cy="70.6807"
                rx="24"
                ry="66.5"
                transform="rotate(21.1234 152.352 70.6807)"
                fill="#923E4D"
              />
            </svg>

            <h2 className="sta-cat">COMPLETED</h2>
          </div>
          <div className="list">
            {completed && completed.length > 0 ? (
              completed.map((cmp) => {
                return (
                  <div className="wl-item">
                    <div className="general">
                      <h2 className="name">{cmp.username}</h2>
                      <p className="item-bought">{cmp.item}</p>
                    </div>
                    <div className="info">
                      <div className="date">
                        <p>{cmp.date}</p>
                      </div>
                      <div className="payment">
                        <p>{cmp.payment}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty">
                <p>Nothing to see here...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
