import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder modal — editors are still cutting the campus tour video.
// Once the final file is ready, replace the "Coming soon" block below
// with a <video> tag pointing at the exported file.
export default function CampusTourModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center px-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl aspect-video bg-charcoal-soft rounded-sm overflow-hidden flex items-center justify-center"
          >
            {/* TODO: replace this block with <video src="/campus-tour.mp4"
                controls autoPlay className="w-full h-full object-cover" />
                once the edited file is ready. */}
            <div className="text-center px-6">
              <p className="text-amber-soft text-sm mb-2">Campus Tour</p>
              <p className="text-bone/70 text-sm md:text-base">Video coming soon</p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-bone/70 hover:text-bone text-2xl leading-none"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}