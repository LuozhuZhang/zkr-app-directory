import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { projects } from '../data/data';
import ProjectCard from './ProjectCard';
import { User } from 'grommet-icons';
import "./style.css"

const ProjectsList = ({ filter, search, networkFilter }) => {
    // const defaultState = Object.keys(projects).map(key => {console.log(projects[key]); return projects[key]}).flat();
    // console.log("default state===>> ",defaultState)
    const [results, setResults] = useState(projects);



//   var  data = results.filter((obj, pos, arr) => {
//         return arr
//           .map(mapObj => mapObj.name)
//           .indexOf(obj.name) == pos;
//       });
     
    //  console.log("datadatadata",data);




    useEffect(() => {
        if (filter.length) {
            setResults(projects.filter(project => project.search_on.indexOf(filter)>=0));
        } else {
            setResults(projects);
        }
    }, [filter]);


    const show_more_data=()=>{
        // numberOfItems=numberOfItems+6
        setnum(num+16)
        console.log("numberOfItems",num)
    }

    const [showmore, setshowmore] = useState(false)

    const [num, setnum] = useState(40)
    console.log("numberOfInumnumnumtems",num)
    // var numberOfItems =showmore ? results.length : 6
    // console.log("chk arry showmore",showmore,"results",results.length,"numberOfItemsfilter",num)

    return (
        <React.Fragment>
            <Box className="custom-scrollbar" direction='row' flex overflow={{ horizontal: 'hidden' }} align='top' justify='center' wrap="true" margin={{ left: "xlarge", right: "xlarge" }} style={{ zoom: "0.92" }}>
                {results.slice(0, num)
                  
                    .filter(project => project.name.toLowerCase().includes(search.toLowerCase()))
                    .filter(project => project.networks.includes(networkFilter) || !networkFilter.length)
                    
                    .map((project, idx) => (
                        <ProjectCard item={project} key={idx} />
                    ))
                }
                {
                num > results.length ?
                null
                :

                <div className='more_wrap'>
                    <button 
                        className='btn_load'
                        onClick={show_more_data}>
                        Show More
                    </button>
                </div>
                }
            </Box>


           
        </React.Fragment>
    )
}
    ;

ProjectsList.propTypes = {
    filter: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    networkFilter: PropTypes.string.isRequired,
};

export default ProjectsList;
