import {useState} from "react";

function ReviewForm({birdHouseId, userId, handleAddReview}) {
    const [newReviewContent, setNewReviewContent] = useState("");

    function handleContentChange(e) {
        setNewReviewContent(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault() 

        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: newReviewContent,
                bird_house_id: birdHouseId,
                user_id: userId,

            }),
        })
            .then((r) => r.json())
            .then((newReview) => {
                handleAddReview(newReview);
                setNewReviewContent("");
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="new-review-form">
                <label for="form-content">
                    Add Review: 
                    <input 
                    id="form-content"
                    type="text"
                    onChange={handleContentChange}
                    value={newReviewContent}>
                    </input>
                </label>
                <input id="form-submit" type="submit" value="Submit"></input>
            </form>
        </div>
    )

}

export default ReviewForm;