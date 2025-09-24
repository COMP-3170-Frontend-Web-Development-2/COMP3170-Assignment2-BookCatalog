import { useState, useEffect, useRef } from "react";
import styles from "./homepage.module.css";
import Header from "../_ui/Header/header.jsx";
import Book from "../_ui/Book/book.jsx";
import Button from "../_ui/Button/button.jsx";
import Footer from "../_ui/Footer/footer.jsx";
import booksData from "../../data/books.json";
import BookForm from "../_ui/BookForm/bookform.jsx";
import Modal from "../_ui/modal/modal.jsx";

function Homepage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData);
    }, []);

    return (
        <div className={styles.homepage}>
            <Header />

            <main className={styles.homepage__main}>
                <div className={styles.homepage__content}>
                    <div>
                        <Modal
                            buttontitle='+ Add new Book'
                            buttonstyle='buttonstyle'>
                            <BookForm />
                        </Modal>
                    </div>

                    <div className={styles.homepage__books}>
                        {books.map((book, index) => (
                            <Book
                                key={book.isbn13 || index}
                                book={{
                                    title: book.title,
                                    price: book.price,
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
