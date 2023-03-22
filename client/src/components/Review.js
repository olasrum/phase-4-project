import {useState} from "react";
import EditReview from "./EditReview"

function Review({review, onDeleteReview, onUpdateReview}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteReview(review);
            } else {
                r.json().then((err) => alert(err.errors));
            }
        });
    }

    function handleUpdateReview(updatedReview) {
        setIsEditing(false);
        onUpdateReview(updatedReview);
    }

    return (
        <div id="review">
            <li>
                {isEditing ? (
                    <EditReview
                    id={review.id}
                    content={review.content}
                    onUpdateReview={handleUpdateReview}
                    />
                    ) : (
                    <span id="review-content">{review.content}</span>
                    )}
                    <button 
                    type="button"
                    onClick={() => setIsEditing((isEditing) => !isEditing)}
                    id="edit-button"
                    >✏️</button>
                    <button
                    id="delete-button"
                    onClick={() => handleDeleteClick(review)}
                    >🗑</button>
            </li>
        </div>
        
    );
}

export default Review;