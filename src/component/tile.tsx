import React from "react";

type TileProps = {
    title: string;
    description?: string;
    onClick?: () => void;
    children?: React.ReactNode;
};

const Tile: React.FC<TileProps> = ({ title, description, onClick, children }) => (
    <div
        style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 20,
            margin: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            cursor: onClick ? "pointer" : "default",
            background: "#fff",
            maxWidth: 300,
        }}
        onClick={onClick}
    >
        <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
        {description && <p style={{ margin: "0 0 10px 0" }}>{description}</p>}
        {children}
    </div>
);

export default Tile;
