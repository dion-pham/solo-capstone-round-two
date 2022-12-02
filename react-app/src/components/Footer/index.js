import React from "react";
import "./Footer.css"

const CreaterLinks = () => {
    return (
        <div className="footer">
            <div className="github-links">
                <a href="https://github.com/dion-pham" target="_blank">
                    <i class="fa-brands fa-github">
                        <div className="names-git">GitHub</div>
                    </i>
                </a>
            </div>
            <div className="github-links">
                <a href="https://www.linkedin.com/in/dinhan-dion-pham-9b4ab0152/" target="_blank">
                    <i class="fa-brands fa-linkedin">
                        <div className="names-git">LinkedIn</div>
                    </i>
                </a>
            </div>
        </div >
    )
}
export default CreaterLinks
