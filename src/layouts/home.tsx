import React from "react";

const HomeLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/blabla">Not exist</a>
                </li>
            </ul>
            {children}
        </div>
    );
}
export default HomeLayout;