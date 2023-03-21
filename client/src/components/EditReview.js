import React, {useState} from "react";

function EditReview({id, content, onUpdateReview}) {
    const [reviewContent, setReviewContent] = useState(content)

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: reviewContent
            }),
        })
        .then((r) => r.json())
        .then((updatedReview) => onUpdateReview(updatedReview));
    }

    return (
        <form id="edit-exercise" onSubmit={handleFormSubmit}>
            <input
                id="edit-content"
                type="text"
                name="content"
                autoComplete="off"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
            />
            <input type="submit" value="Save"  />
        </form>
    );
}

export default EditReview;