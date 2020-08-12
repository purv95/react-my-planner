import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title{id}</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, obcaecati blanditiis itaque et, inventore fuga quidem aperiam provident voluptates eaque delectus quasi nobis quis culpa eligendi minima quia ducimus repudiandae.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Purv</div>
                    <div>18th July, 7pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
