export default function LoadButton ({ onClick, loading }) {
    return (
        <div>
            <button onClick={onClick} disabled={loading}>
                {loading ? "Chargement..." : "Charger plus d'événements"}
            </button>
        </div>
    );
};