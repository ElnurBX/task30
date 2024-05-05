import React from 'react';
import styled from 'styled-components';
import './dropdown.scss';

const NavLi = styled.li`
    padding: 10px;
    position: relative;
    &:hover div div {
        transform: translateY(-20px);
    }
`;
const CharDiv = styled.div`
    display: inline-block;
    font-size: 16px;
    transition: transform 0.4s ease;
    transition-delay: ${({ delay }) => delay};
    text-shadow: 0px 20px 0px #55e6a5;
    &:hover {
        transform: translateY(-50px);
    }
`;

const nav = [
    {
        title: "home",
        DropDown: true,
        active:true,
        DropDownArray: ["home", "home1", "home2", "home3", "home4", "homertl"]
    },
    {
        title: "about us",
        DropDown: false,
        active:false,
        DropDownArray: []
    },
    {
        title: "services",
        DropDown: false,
        active:false,
        DropDownArray: []
    },
    {
        title: "projects",
        DropDown: false,
        active:false,
        DropDownArray: []
    },
    {
        title: "blog",
        DropDown: true,
        active:false,
        DropDownArray: ["blog info", "blog details"]
    },
    {
        title: "content",
        DropDown: false,
        active:false,
        DropDownArray: []
    }
];

const DropDown = () => {
    return (
        <nav>
            <ul>
                {nav.map((item, index) => (
                    <NavLi key={index}>
                        <div style={item.active ? { color: "#55e6a5" } : {}}  className='texthiden'>
                            {item.title.split('').map((char, idx) => {
                                const delay = `${idx * 0.1}s`;
                                return (
                                    <CharDiv key={idx} delay={delay}>
                                        {char}
                                    </CharDiv>
                                );
                            })}
                            { item.DropDown && <i className="fa-solid fa-chevron-down"></i>}
                        </div>
                        {item.DropDown && (
                            
                            <ul>
                                
                                {item.DropDownArray.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </NavLi>
                ))}
            </ul>
        </nav>
    );
};

export default DropDown;
