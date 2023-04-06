import React, { useState } from "react";
import { Anchor, Button, Drawer  } from 'antd';

const { Link } = Anchor;


function AppHeader(){
        const [open, setOpen] = useState(false);

        const showDrawer = () => {
            setOpen(true);
        };

        const onClose = () => {
            setOpen(false);
        };
    return (
        
        <div className="container-fluid">
            <div className="header">
            <div className="logo">
                <i className="fas fa-bolt"></i>
                <a href="http://www.google.com">Tech</a>
            </div>
            <div className="mobileHidden">
                <Anchor targetOffset='65'>
                    <Link href="#hero" title="home" />
                    <Link href="#about" title="About" />
                    <Link href="#feature" title="Feature" />
                    <Link href="#works" title="Works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                </Anchor>
            </div>
            <div className="mobileVisible">
                <Button type="primary" onClick={showDrawer}>
                    <i className="fas fa-bars"></i>
                </Button>
                <Drawer placement="right" onClose={onClose} open={open}>
                    <Anchor targetOffset='65'>
                        <Link href="#hero" title="home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Feature" />
                        <Link href="#works" title="Works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </Drawer>
            </div>
            </div>
        </div>
    );
}

export default AppHeader;