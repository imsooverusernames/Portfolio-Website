import React from 'react';
import './Island.css';

const Island = () => {
  return (
    <section id="home">
        <header>
            <h4 class="logo"><a href="#">BrunoBorici</a></h4>
                <nav>
                    <ul>
                    <li>
                        <a onclick="copyEmailAndShowToast(emailMsg)" aria-label="Copy email address">Mail</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bruno-borici-212154337/" target="_blank"
                        aria-label="Visit my LinkedIn">LinkedIn</a>
                    </li>
                    </ul>
                </nav>
        </header>
    </section>
    );
};

export default Island;