import React from "react";
import { Button, Modal } from 'antd';
import { useState } from 'react';

function AppWorks(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return(
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                    <>
                    <div className="contentHolder">
                    <Button type="primary" onClick={showModal}>
                    <i className="fas fa-play"></i>
                    </Button>
                    </div>
                    <Modal title="This is modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
                        <iframe title="My github link" width="100%" height="100%" src="https://www.youtube.com/watch?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU&v=8f8_JYIzOno&feature=emb_logo" ></iframe>
                    </Modal>
                    </>
                </div>
            </div>
        </div>
    );
}

export default AppWorks;