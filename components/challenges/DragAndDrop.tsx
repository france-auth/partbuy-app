interface DragAndDropItem {
  id: string;
  content: string;
}

interface DragAndDropProps {
  data: {
    items: DragAndDropItem[];
    correctOrder: string[];
  };
}

const DragAndDrop = ({ data }: DragAndDropProps) => {
  return (
    <div className="box">
      {data.items.map((item) => (
        <div key={item.id} draggable>
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
