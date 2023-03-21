import {useState} from "react";
import EditReview from "./EditReview"

function Review({id, content, onDeleteReview, onUpdateReview}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteClick() {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        });
        onDeleteReview(id)
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
                    id={id}
                    content={content}
                    onUpdateReview={handleUpdateReview}
                    />
                    ) : (
                    <span id="review-content">{content}</span>
                    )}
                    <button 
                    type="button"
                    onClick={() => setIsEditing((isEditing) => !isEditing)}
                    id="edit-button"
                    >✏️</button>
                    <button
                    id="delete-button"
                    onClick={handleDeleteClick}
                    >🗑</button>
            </li>
        </div>
        
    );
}

export default Review;