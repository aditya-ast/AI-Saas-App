import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function AiTools() {
  const naviagte = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Powerful AI Tools
        </h2>
        <p className="text-grey-500 max-w-xl mx-auto">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {AiToolsData.map((tool, idx) => (
          <div key={idx} className="p-6 flex-1 min-w-[260px] max-w-[300px] rounded-xl bg-white/80 shadow-xl border border-gray-200 hover:scale-105 transition-all duration-200 cursor-pointer flex flex-col items-center m-2" style={{flexBasis: '30%'}} onClick={()=> user && naviagte(tool.path)}>
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
            <p className="text-gray-400 text-sm max-w-[95%]">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AiTools;
