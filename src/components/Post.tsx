

export type PostProps = {
  id: string;
  user: string;
  content: string;
  support: number;
  oppose: number;
  comments: string[];
  hasVoted: "support" | "oppose" | null;
  onVote: (postId: string, vote: "support" | "oppose") => void;
};

export default function Post({
  id,
  user,
  content,
  support,
  oppose,
  comments,
  hasVoted,
  onVote,
}: PostProps) {
  return (
    <div className="bg-[#181818] text-white p-8 rounded-2xl border border-[#2e2e2e] 
    max-w-md mb-4 min-w-[400px]">
      <p className="text-gray-300 mb-4 text-center text-xl">{content}</p>

      {/* Vote buttons */}
      <div className="flex gap-4 mb-2 justify-center">
        <button
          onClick={() => hasVoted || onVote(id, "support")}
          disabled={!!hasVoted}
          className={`px-4 py-2 rounded-lg transition text-lg ${
          hasVoted === "support"
          ? "bg-green-600 !cursor-default"
          : hasVoted === "oppose"
          ? "bg-green-500 opacity-50 !cursor-default"
          : "bg-green-500 hover:bg-green-600"
      }`}
        >
          Support
        </button>

        <button
          onClick={() => hasVoted || onVote(id, "oppose")}
          disabled={!!hasVoted}
          className={`px-4 py-2 rounded-lg transition text-lg ${
            hasVoted === "oppose"
            ? "bg-red-800 cursor-default !cursor-default"
            : hasVoted === "support"
            ? "bg-red-700 opacity-50 !cursor-default"
            : "bg-red-700 hover:bg-red-800"
          }`}
        >
          Oppose
        </button>
      </div>

      {/* Locked content: only shows after voting */}
      {hasVoted && (
        <div>
          {/* Vote bar container */}
          <div className="relative w-full mt-4 mb-3">
            {/* Indicator arrow TODO*/}

            {/* Bar background */}
            <div className="w-full h-10 bg-[#2a2a2a] rounded-full overflow-hidden relative shadow-inner">
              {/* Support fill */}
              <div
                className="absolute left-0 top-0 h-full"
                style={{
                  width: `${(support / (support + oppose || 1)) * 100}%`,
                  background: "linear-gradient(to right, #16a34a, #22c55e)", // green gradient
                  transition: "width 0.5s ease",
                }}
              />

              {/* Oppose fill */}
              <div
                className="absolute right-0 top-0 h-full"
                style={{
                  width: `${(oppose / (support + oppose || 1)) * 100}%`,
                  background: "linear-gradient(to left, #991b1b, #b91c1c)", // red gradient
                  transition: "width 0.5s ease",
                }}
              />
            </div>

            {/* Total Count */}
            <div>
              <p className="text-center italic opacity-70 pt-1">{support + oppose} impressions</p>
            </div>

          </div>

          {/* User */}
          <h2 className="text-base font-bold mb-2">{user}</h2>

          {/* Comments */}
          <div className="mt-2 border-t border-[#2e2e2e] pt-2">
            <h3 className="font-semibold text-sm mb-1 text-gray-400">
              Comments {/* Make comments a dropdown */}
            </h3>
            {comments.length > 0 ? (
              <ul className="text-gray-300 text-sm list-disc ml-5">
                {comments.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No comments yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
