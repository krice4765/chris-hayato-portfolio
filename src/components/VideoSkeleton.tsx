export default function VideoSkeleton() {
  return (
    <div className="notion-card overflow-hidden">
      {/* 9:16 Aspect Ratio Skeleton */}
      <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
        <div className="absolute inset-0 skeleton rounded-t-lg" />
      </div>

      {/* Content Skeleton */}
      <div className="p-3 space-y-2">
        {/* Platform Badge Skeleton */}
        <div className="skeleton h-5 w-16 rounded-full" />

        {/* Title Skeleton - 2 lines */}
        <div className="space-y-1.5">
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-3/4 rounded" />
        </div>
      </div>
    </div>
  );
}
