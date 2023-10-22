import kashmir from "../images/kashmir.jpg"
import DestinationCard from "./DestinationCard";
export default function MainContent() {
    return (
        <main id="destinations">
            <h3>Destinations</h3>
            <div className="destinationCardWrapper">
                <DestinationCard
                    img={kashmir}
                    title="Kashmir"
                    description="Heaven on Earth" />
                <DestinationCard
                    img={kashmir}
                    title="Kashmir"
                    description="Heaven on Earth" />
            </div>
        </main>
    );
}