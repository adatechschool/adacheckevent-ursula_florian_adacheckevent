export default function LoadButton({ onClick, loading }) {
    return (
        <div>
            <button onClick={onClick} disabled={loading}
                className="
                    px-5 py-2
                    rounded-lg
                    border border-transparent
                    bg-[#1a1a1a] text-white
                    text-base font-medium
                    cursor-pointer
                    transition-colors duration-200
                    hover:border-[#646cff]
                    focus:outline focus:outline-4 focus:outline-blue-500
                ">
                {loading ? "Chargement..." : "Charger plus d'événements"}
            </button>
        </div>
    );
};
