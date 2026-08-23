{!profile?.profileCompleted && (
    <div className="bg-caramel/10 border border-caramel/30 rounded-card p-4 flex items-center justify-between mb-6">
        <div>
            <p className="text-sm font-medium text-cream-textPrimary dark:text-espresso-textPrimary">
                Complete your profile for better matches
            </p>
            <p className="text-xs text-cream-textSecondary dark:text-espresso-textSecondary mt-1">
                Add your batch, skills, and course to see personalized recommendations.
            </p>
        </div>
        <Link
            to="/app/profile/edit"
            className="text-sm font-medium bg-caramel text-white px-4 py-2 rounded-lg hover:bg-caramel-dark shrink-0"
        >
            Complete profile
        </Link>
    </div>
)}