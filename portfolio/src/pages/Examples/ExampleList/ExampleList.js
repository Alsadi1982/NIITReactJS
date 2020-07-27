import React from 'react';
import { Link} from "react-router-dom";

class ExampleList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/examples/calc'>
                        Калькулятор
                        </Link>
                    </li>
                    <li>
                        <Link to='/examples/sec'>
                        Секундомер
                        </Link>
                    </li>
                    <li>
                        <Link to='/examples/move'>
                        Drag'n'drop
                        </Link>
                    </li>
                    <li>
                        <Link to='/examples/todo'>
                        ToDoList
                        </Link>
                    </li>
                    <li>
                        <Link to='/examples/hookExample'>
                            Hook example
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ExampleList;
