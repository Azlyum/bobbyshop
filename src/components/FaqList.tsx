import { faqItems } from '../data/siteContent';

export function FaqList() {
  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <details key={item.question} className="panel rounded-[1.75rem] p-6">
          <summary className="cursor-pointer list-none pr-8 font-['Space_Grotesk'] text-xl font-semibold text-white">
            {item.question}
          </summary>
          <p className="mt-4 text-base leading-8 text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
