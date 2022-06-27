import Footer from "../components/Footer"

export default function App({ children }) {
  return (
    <>
     <div>{children}</div>
     <Footer />
    </>
   
  );
}
