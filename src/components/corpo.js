import Esquerda from "./esquerda";
import Sidebar from "./sidebar/sidebar";

export default function Corpo() {
    return (
        <div class='corpo'>
            <Esquerda />
            <Sidebar />
        </div>
    )
}