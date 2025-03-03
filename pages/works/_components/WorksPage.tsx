"use client"

import InnerBanner from "@/components/InnerBanner/InnerBanner";
import { useFetchWorks, Work } from "@/Hooks/useFetchData";
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import DropDown from "@/components/DropDown";
import WorksCard from "@/components/Home/WorksCard";
import ReactPaginate from "react-paginate";
import { useLenis } from "@/Hooks/useLenis";

// const WorksPage = ({ works }: { works: Work[] }) => {
const WorksPage = () => {
    useLenis();

    const [selectedService, setSelectedService] = useState("")

    // const [filteredWorks, setFilteredWorks] = useState<Work[]>([])

    console.log("selectedService: ", selectedService)

    const onSelectService = (service: string) => {
        setSelectedService(service)
    }

    const [currentPage, setCurrentPage] = useState(0);
    // const { works, isLoading } = useFetchWorks({ selectedService });
    const { works, isLoading } = useFetchWorks();

    const filteredWorksByService = selectedService
        ? works?.filter(work => work.servicesProvides.includes(selectedService))
        : works;

    console.log("filteredWorksByService: ", filteredWorksByService)

    // PAGINATION
    const itemsPerPage = 6;
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = works?.slice(indexOfFirstItem, indexOfLastItem);
    const currentItems = filteredWorksByService?.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
        // window.scroll(0, 700);
    };

    return (
        <div className='careers-section page-transition' >
            <InnerBanner nextSection={'.works-portfolio'} text='our <br> <span>works</span>' icons={["worksIcon3", "worksIcon1", "worksIcon2"]} />

            <div className="works-portfolio">
                {false ? <div className="all-portfolio-title-section">
                    <p className='portfolio-container-title' ><Skeleton width={250} height={50} /></p>
                    <Skeleton width={200} height={50} />
                </div> :
                    <div className="all-portfolio-title-section">
                        <p className='portfolio-container-title' >portfolio</p>
                        <DropDown onSelectService={onSelectService} />
                    </div>}

                {isLoading ? <div className="works-card-list">
                    {Array.from({ length: 2 }).map((_, i) =>
                        <div className="works-card" key={i}>
                            <div className='works-card-img'>
                                <Skeleton height={300} />
                            </div>
                            <div className='works-title' >
                                <h1><Skeleton width={200} /></h1>
                            </div>
                        </div>
                    )}
                </div> :
                    <div className="works-card-list">
                        {currentItems.map((item, i) =>
                            <WorksCard key={i} data={item} />
                        )}

                        {currentItems.length === 0 && <div className="no-works">
                            <p>No Works Found</p>
                        </div>}

                    </div>}

                <div className='pagination-section'>
                    {works.length > 6 && (
                        <ReactPaginate
                            previousLabel={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5831 4L8.9964 10.5866C8.62508 10.9633 8.41693 11.471 8.41693 12C8.41693 12.529 8.62508 13.0367 8.9964 13.4134L15.5831 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            }
                            nextLabel={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            }
                            breakLabel={"..."}
                            pageCount={Math.ceil(works.length / itemsPerPage)}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={4}
                            onPageChange={handlePageChange}
                            containerClassName={"custom-pagination"}
                            pageClassName={"custom-pagination-item"}
                            previousClassName={"custom-pagination-item"}
                            nextClassName={"custom-pagination-item"}
                            activeClassName={"custom-pagination-active"}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorksPage
