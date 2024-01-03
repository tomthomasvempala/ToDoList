import { useState } from "react";
import Status from "../enums/Status";

export default function TaskItem({ data, index, handleOnClick }) {
    console.log(data)
    return (
        <li>
            <button onClick={() => {
                handleOnClick(index)
            }}>
                
                {
               data.status == Status.DONE ?
                <s>{data.task}</s>:
                    data.task
            }
            </button>
        </li>
    );
}