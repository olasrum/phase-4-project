import { useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function BirdHouse() {
    const [{data: birdHouse, error, status}, setBirdHouse] = useState({
        data: null,
        error: null,
        status: "pending",
    });
    const [user, setUser] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/bird_houses/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((birdHouse) =>
                setBirdHouse({data: birdHouse, error: null, status: "resolved"})
                );
            } else {
                r.json().then((err) =>
                setBirdHouse({data: null, error: err.error, status: "rejected"})
                );
            }
        });
    }, [id]);

    useEffect(() => {
        fetch(`/users/${id}`)
        .then((r) => r.json())
        .then((user) => setUser(user));
    }, [id]);

    function handleDeleteReview(deleteReview) {
        setBirdHouse({
            data: {
                ...birdHouse,
                reviews: birdHouse.reviews.filter((r) => r.id !== deleteReview.id),
            },
            error: null,
            status: "resolved",
        });
    }

    function handleUpdateReview(updatedReview) {
        const updatedReviews = birdHouse.reviews.map((rev) => {
            if (rev.id === updatedReview.id) {
                return updatedReview;
            } else {
                return rev;
            }
        });
        setBirdHouse({
            data: {
                ...birdHouse,
                reviews: updatedReviews,
            },
            error: null,
            status: "resolved",
        });
    }

    function handleAddReview(newReview) {
        setBirdHouse({
            data: {...birdHouse, reviews:[...birdHouse.reviews, newReview]},
            error: null,
            status: "resolved",
        });
    }

    if (status === "pending") return <h1>Loading...</h1>
    if (status === "rejected") return <h1>Error: {error.error}</h1>;

    return (
        <div>
        <img src={birdHouse.image} alt={birdHouse.name}></img>
        <div>{birdHouse.name}</div>
        <div>${birdHouse.price}</div>
        <div>{birdHouse.description}</div>
        <h4>Reviews:</h4>
        <ul>
            {birdHouse.reviews.map((review) => (
            <Review
                key={review.id}
                review={review}
                onDeleteReview={handleDeleteReview}
                onUpdateReview={handleUpdateReview}
            />))}
            <br></br>
            <ReviewForm 
            handleAddReview={handleAddReview}
            birdHouseId={birdHouse.id}
            userId={user.id}
            />
        </ul>
    </div>
    );
}

export default BirdHouse;