import "./sidebar.css"
import { TfiLock, TfiUnlock } from "react-icons/tfi"
import { RiLockUnlockFill } from "react-icons/ri"
import Filters from "./filters/Filters"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const Sidebar = ({ sidebarExpand, expandSidebarFunction, toggleSidbarExpand }) => {





    return (
        <>
            <div className={`projectSidebar ${sidebarExpand ? "expand" : ""}`}

            >
                <div className="sidebarSm_toggleBar" onClick={toggleSidbarExpand}>
                    {

                        sidebarExpand ? <span>Close Filterbar</span> : <span>Expand</span>
                    }
                    {
                        sidebarExpand ? <TfiLock /> : <RiLockUnlockFill />
                    }
                </div>
                <div className="sidebar_header">
                    <h6 className="sidebar_header_text">Find project of Your Choice</h6>
                </div>
                <div className="sidebar_body">
                    <Filters />
                </div>

                <ArrowLeftIcon className="arrowLeftIcon" onClick={expandSidebarFunction} />
                <div className="sidebarSm" >

                    <div className="sidebarSmSort">
                        <p>Sort By</p>
                        <TuneIcon />
                        <ProductionQuantityLimitsIcon />
                        <ArrowDropDownIcon />
                    </div>
                    <div className="sidebarSm_img">
                        <p>Web Tools</p>
                        <img src="https://img.icons8.com/color/48/null/javascript--v1.png" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFW0lEQVRogc2ZW2xUVRSGv7Vnagu0FCkIUi4hXF4gtAWKChghUNQC8YIQNakmJKUPRqEQ0JiQjCSGGMJFNAgFYowoKCaKQpNSauFFLC2UQAgRhIDGghWZlFtpZ+YsH2amGQTl7DO00/9pn3PWv9a/ss9eZ5+1haSgMmHRhgJBJht0rAPDBRkK2k8gQyET5DZoK3AT5SIiF0HPIeZQ/aPBWgIBJxkF4okVCJhJl3ovUmUFyPAk4p9VcZY0bFlW6dWB8UIqvJS9XVU+SVI8wChRs7ewdN1irw6sZ6CwdP1MhOr4tcI+lPMivAjketThqGFGw+byg7ZE6xlQeDZh/H5DRfmchq3lb6WZ8HjgL1t/cR3i8J4noi1BRAbFxz7xfRkf/7R5eTNI9b1ZrjB1XMmaXrYkD2tA+3WMNDI64b6Ajr4Xw62WjPSMR2xJfuswgkGjQ4WPJ5Zu8Al6TvmwDJho7S8BYQ35bDn2CdyJXBH9BkDiWXUxPJXR7gTrGVBHzojRbDe2omQrjLSX5R7evsQuMbFsbbGo2efWPhLRUce2L/3VJsZdMzDyzY3pD7c7z4MzAzVDQL2vE6Xf/Y3uRsv+vJ2I3MEV5Q8M32XNOL5HEhbcHeIKy9Y9Q1tkKzA4OjmpWZgi8iT//qpH5bx+/UB+ZdMPvvmD5h69BQmLeNKida+ishcY3JViPaA4Mz2yKX5hACaVrh2tyDbAug6nBMJrLTV5kyCWgIMJAD1SKsoOIhGzEMBMWfhBloi8kGpFAOLztceGD93fWOdp7TS/aU9LmwKa0bnSXKHtdjB4WWunZYCr6tXvmhMcb0RlQmcrc4n9p3YH2q85LdNx+X0yjplgVLpFAiEHAgDiaJlbkqozwaBJbYEfBMKClh6tKD/WUp0/G3jONVMYY0ByOk/b/yKMUKVGpxypWPpZS9W4xwS+sHMh/f2gfT0KCCF8jaPfi+G8GrnqOmzIr76s0OXD65e2auXI9Ovz8peDrgJsi0mOX6Bd3ZStRAFQJ2JK6rYsPttcOyYzPZz2lECBiPvNoUIOs/NHX1fmAjke95U9/ApXgUzXFOHHnm0ts2uLT4VuzC9YqWF9G+gFoF2/dfrbIFadhGZ/WOfXfhpou9bnzA5VXUVMfIpwxQAn3VorrD68fenVGzX5pSLycicKc6lHThuBYy7tHfGHdgFEW4qph4FDBmhwaf9n/aYVl4M1BcOAEZ2oywJy0Ay7mnsEaHJhfQXA4AzoXFHuoNCYVXTstNm9e0FEkK9cEKI1xvF1i06GEbZB7H9A/ZH1wK2UKrJD8+2M1s8hlkD9pmW/C3hucXc1VGVJ/6m/XIeEf+IjFeXbECkh9q53U7SK8Eb2rMad8Rt3dCXqtyzZMa5kzbcZPfxFio4QMR3P1VFPrXNFN4tywbvmuB/TZDRSlfX0iebE+9YbkJbq8Y8LzmHXgY0Ua2v4Zze2t9OkfeDTJ27a6Em2uXtfiKOVku6u2dFT2A0ssPHfLUpiMkhlAs1AJFknqUigzajM7F10fIBPZajC8WScWSfgEGlLJiDKrsxZjTUAvWY1NonoyvgjUdr/m3hv2B/ytTkXgLAtLyFiKPFS8XX4csCqtR51Z4k+c04GQffY8jqgvNJyIL8QIFib30ccJz4DYXF8u2zdefoRvVWTlxtyzGFBh3jhE128Z4h2wrNiSt7tPfP4altHnk9ogjUFw3yO7gSe8OojhlYVeSd7ZuNGL+Skjpg0gLkxJe8lFVOGquuWYIx9GWRHGN9HfYuO/uZVwwM7I7tVNXZISNKmIc5kQfKAgQIDNBojiBJU4ZSI1uFIXVZanzqZftB7MYjhH1U5yScg0n60AAAAAElFTkSuQmCC" />
                        <img src="https://img.icons8.com/plasticine/100/null/react.png" />
                    </div>
                    <div className="sidebar_category">
                        <p>Category</p>
                        <div>
                            <p className="categoryType">All</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar