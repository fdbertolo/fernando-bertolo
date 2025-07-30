'use client';

import { useState } from 'react';
import ChromaGrid from 'components/chroma-grid';

const getUniqueSkills = (items) => {
    const allSkills = new Set();
    items.forEach((item) => {
        if (Array.isArray(item.handle)) {
            item.handle.forEach((skill) => allSkills.add(skill));
        }
    });
    return ['All', ...allSkills];
};

export default function WorksList({ items, children, haveSkills = true }) {
    const [selectedSkill, setSelectedSkill] = useState('All');
    const uniqueSkills = getUniqueSkills(items);

    const filteredItems =
        selectedSkill === 'All' ? items : items.filter((item) => item.handle && item.handle.includes(selectedSkill));

    return (
        <>
            {children}
            {haveSkills && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="font-semibold text-zinc-300 mr-2">Skill:</span>
                {uniqueSkills.map((skill) => (
                    <button
                        key={skill}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-3 py-1 text-sm rounded-full transition-colors duration-200 ease-in-out ${
                            selectedSkill === skill
                                ? 'bg-[#9646e5] text-white font-semibold'
                                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        }`}
                    >
                        {skill}
                    </button>
                ))}
            </div>
            )}

            <div className="flex justify-center">
                <ChromaGrid items={filteredItems} radius={500} damping={0.45} fadeOut={0.6} ease="power3.out" />
            </div>
        </>
    );
}
