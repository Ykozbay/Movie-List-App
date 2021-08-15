import React from "react";

export function Footer() {
    return (
        <div style={{
            display: "inline-block",
            float: "left",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: "#2F2A33"
        }}>
            <div style={{
                color: "#5a606b",
                width: "70%",
                paddingLeft: "50px",
                paddingRight: "50px"
            }}>
                <h3>ABOUT ME</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                    error earum perspiciatis praesentium sint ipsum provident blanditiis
                    pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
                    culpa cupiditate placeat facilis repellat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                    perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
                    dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
                    earum?
                </p>
            </div>
            <div style={{
                color: "#5a606b",
                width: "30%"
            }}>
                <h3>KEEP IN TOUCH</h3>
                <li>
                    <p>
                        <strong>
                            Address:
                        </strong>{" "}
                        İzmir, TURKEY
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            Phone:
                        </strong>{" "}
                        +01 00 00 00
                    </p>
                </li>
                <li>
                    <p>
                        <strong>
                            Email:
                        </strong>{" "}
                        yagmurkozbay@gmail.com
                    </p>
                </li>
            </div>
        </div>
    );
}