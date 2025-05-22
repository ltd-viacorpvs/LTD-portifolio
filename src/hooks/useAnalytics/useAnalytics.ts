import { analytics, logEvent } from '@/lib/firebase'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useAnalytics = () => {
	const location = useLocation()

	useEffect(() => {
		logEvent(analytics, 'page_view', {
			page_path: location.pathname,
			page_location: window.location.href,
			page_title: document.title,
		})
	}, [location])

	const trackEvent = (eventName: string, eventParams = {}) => {
		logEvent(analytics, eventName, eventParams)
	}

	const trackButtonClick = (buttonName: string, buttonLocation: string) => {
		logEvent(analytics, 'button_click', {
			button_name: buttonName,
			button_location: buttonLocation,
		})
	}

	return { trackEvent, trackButtonClick }
}
