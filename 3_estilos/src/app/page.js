import MyComponent from "@/components/MyComponent";
import styles from "./page.module.css";
import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      {/* 1 - CSS Global */}
      <h1>Eu tenho CSS global</h1>
      <p className="p-global">Eu também</p>
      <h2 id="heading-global">Me too</h2>
      {/* 2 - CSS Modules */}
      <h2 className={styles.heading_module}>Testando CSS Module</h2>
      <div className={styles.container}>
        <p>Testando</p>
      </div>
      {/* 3 - Tailwind */}
      <MyComponent />
      {/* 4 - SASS */}
      <Container />
      {/* 5 - SASS Com CSS MOdules */}
      <Button />
      {/*6 - Styled Components */}
      <CustomButton>Clique aqui!</CustomButton>
    </main>
  );
}
