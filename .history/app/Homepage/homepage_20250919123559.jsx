import { useState, useEffect, useRef } from "react";
import styles from "./homepage.module.css";
import Header from "../_ui/Header/header.jsx";
import Book from "../_ui/Book/book.jsx";
import Button from "../_ui/Button/button.jsx";
import Footer from "../_ui/Footer/footer.jsx";
import booksData from "../data/books.json";

function Homepage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData);
    }, []);

    // Add Book
    function handleAddBook() {
        alert("Add Book clicked!");
    }

    return (
        <div className={styles.homepage}>
            <Header />

            <main className={styles.homepage__main}>
                <div className={styles.homepage__content}>
                    <Button
                        variant='add'
                        size='large'
                        onClick={handleAddBook}>
                        + Add Book
                    </Button>

                    <div className={styles.homepage__books}>
                        {books.map((book, index) => (
                            <Book
                                key={book.isbn13 || index}
                                book={{
                                    title: book.title,
                                    authors: book.authors,
                                    image: book.image,
                                    detailsUrl: book.url,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Homepage;
