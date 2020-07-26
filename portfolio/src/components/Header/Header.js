import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>
                                Основная страница
                            </Link>
                        </li>
                        <li>
                            <Link to='/examples'>
                                Примеры
                            </Link>
                        </li>
                        <li>
                            <Link to='/resume'>
                                Резюме
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
