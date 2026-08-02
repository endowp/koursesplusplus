import { getRandomColor } from "./Util";

export interface Site {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  siteType: string;
}

export const SitesCard = ({ sites }: { sites: Site[] }) => {
  return (
    <div className="row row-cols-auto justify-content-center">
      {sites.map((site) => {
        return (
          <div>
            <div
              className="card"
              style={{
                width: "23rem",
                height: "25rem",
                margin: "1rem",
                overflow: "hidden",
              }}
            >
              <svg
                aria-label="Placeholder: Image cap"
                className="bd-placeholder-img card-img-top"
                height="180"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill={getRandomColor()}></rect>
                <text x="30%" y="50%" fill="white">
                  Placeholder Image
                </text>
              </svg>
              <div className="card-body">
                <h5 className="card-title">
                  <span className="ml-3 text-center"> {site.siteName}</span>
                </h5>
                <p className="card-text">{site.siteDescription}</p>
                <a
                  href={site.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info"
                >
                  Go to {site.siteName}
                </a>
              </div>
              <span className={`site-type site-type-${site.siteType}`}>
                {site.siteType}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
