import React from "react"


const WorkTypeCard=({workType, setWorkType, id, name})=>{
    const handleWorkTypeChange = (event) => {
        setWorkType(event.target.id);
        // alert(event.target.id)
      };

    return (
        <div className="flex gap-2 text-neutral-500">
            <input
            type="radio"
            name="type"
            id={id}
            className="cursor-pointer"
            onChange={handleWorkTypeChange}
            checked={workType == id}
            />
            <label htmlFor={id}>{name}</label>
        </div>
    )
}

export default WorkTypeCard