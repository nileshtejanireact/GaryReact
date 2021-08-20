import React from 'react'

const moduleinfoblock = () => {
    return (
        <div className="module_info_block">
            <div className="module_block_left">
                <div className="module_block active">
                    <a href="#0">
                    Module <br /> Information
                    </a>
                </div>
                <div className="module_block">
                    <a href="#0">
                    Select <br /> Content
                    </a>
                </div>
                <div className="module_block quiz_block">
                    <a href="#0">
                    Add <br /> Quizes
                    </a>
                </div>
                <div className="module_block">
                    <a href="#0">
                    AI <br /> Recommendations
                    </a>
                </div>
            </div>
            <div className="module_block_right">
                <div className="save_module_btn">
                    <a href="#0">
                    Save Module
                    </a>
                </div>
            </div>
        </div>
    )
}

export default moduleinfoblock;
