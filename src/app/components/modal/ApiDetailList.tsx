import ApiDetail from '@/app/components/modal/ApiDetail';

type ApiDetailListProps = {
  items: {
    label: string;
    content: any;
  }[];
};

export default function ApiDetailList({ items }: ApiDetailListProps) {
  return (
    <>
      {items.map((item, index) => (
        <ApiDetail key={index} label={item.label} content={item.content} />
      ))}
    </>
  );
}
