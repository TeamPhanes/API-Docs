import CopyButton from '@/app/components/button/CopyButton';

type ApiDetailProps = {
  label: string;
  content: any;
};

export default function ApiDetail({ label, content }: ApiDetailProps) {
  if (!content) return null;

  return (
    <div className="bg-bgLine p-10">
      <h3 className="font-semibold text-lg mb-1">{label}</h3>
      <pre className="bg-bgCard border-2 border-gray-500 p-3 rounded-md overflow-auto whitespace-pre-wrap z-50 relative pt-[52px]">
        <div className="w-full h-10 bg-gray-500 absolute top-0 left-0 flex justify-end items-center px-3">
          <CopyButton textToCopy={JSON.stringify(content, null, 2)} />
        </div>
        {JSON.stringify(content, null, 2)}
      </pre>
    </div>
  );
}
