import Link from "next/link";
// import "./breadCrumb.css";

const RoutesMap = ({ title }: { title: string | string[] | undefined }) => {
    const currentURL = new URL(window.location.href);
    const pathname = currentURL.pathname;

    const segments = pathname.split('/').filter(segment => isNaN(Number(segment)));

    // Convert title to a string if it's an array or undefined
    const normalizedTitle = Array.isArray(title) ? title.join(' ') : title || '';

    return (
        <div
            className="bread-crumps-section"
            style={{
                display: "flex",
                gap: "3px",
                alignItems: "center",
                textTransform: "capitalize",
                whiteSpace: "nowrap"
            }}
        >
            <Link href="/" style={{ cursor: "pointer", textDecoration: "none", color: "#878787" }}>
                <p style={{ fontSize: "16px" }}>Home /</p>
            </Link>
            {segments.map((segment, index) => {
                if (index < segments.length - 1) {
                    return (
                        <span key={index}>
                            <Link
                                style={{ textDecoration: "none", color: "#878787" }}
                                href={index === 0 ? `/${segment}` : `${segment}`}
                            >
                                <p
                                    style={{
                                        fontSize: "16px",
                                        textDecoration: "none",
                                        color: segment === normalizedTitle.toLowerCase() ? "#000" : "#878787",
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    {segment} {index < segments.length - 2 && " / "}
                                </p>
                            </Link>
                        </span>
                    );
                }
                return null;
            })}
            <p className="bread-crumps-text" style={{ margin: "0", fontSize: "16px" }}>
                / {normalizedTitle}
            </p>
        </div>
    );
};

export default RoutesMap;


// // import { Link } from "react-router-dom";
// import Link from "next/link";
// import "./breadCrumb.css"

// // const RoutesMap = ({ title }: { title: string | undefined }) => {
// const RoutesMap = ({ title }: { title: string | undefined }) => {
//     const currentURL = new URL(window.location.href);
//     const pathname = currentURL.pathname;

//     const segments = pathname.split('/').filter(segment => isNaN(Number(segment)));

//     return (
//         <div className="bread-crumps-section" style={{ display: "flex", gap: "3px", alignItems: "center", textTransform: "capitalize", whiteSpace: "nowrap" }} >
//             <Link href='/' style={{ cursor: "pointer", textDecoration: "none", color: "#878787" }} ><p style={{ fontSize: "16px" }} >Home /</p></Link>
//             {segments.map((segment, index) => {
//                 if (index < segments.length - 1) {
//                     return (
//                         <span key={index}>
//                             <Link style={{ textDecoration: "none", color: "#878787" }} href={index === 0 ? `/${segment}` : `${segment}`}>
//                                 <p style={{ fontSize: "16px", textDecoration: 'none', color: segment === title?.toLowerCase() ? '#000' : '#878787', display: "flex", alignItems: "center" }}>
//                                     {segment} {index < segments.length - 2 && ' / '}
//                                 </p>
//                             </Link>
//                         </span>
//                     )
//                 }
//                 return null;
//             })}
//             <p className="bread-crumps-text" style={{ margin: "0", fontSize: "16px" }} >/ {title}</p>
//         </div>
//     );
// };

// export default RoutesMap;